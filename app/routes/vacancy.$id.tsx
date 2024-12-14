import {
  data,
  LoaderFunctionArgs,
  redirect,
  type MetaFunction,
} from "@remix-run/node";

import { ApplicationSection } from "@modules/vacancy/components";
import VacancyLogic from "~/shared/logic/vacancy.logic";
import { useLoaderData } from "@remix-run/react";
import { CommonApplicationButton } from "~/modules/vacancy/components/application-section.components";
import { SessionProvider } from "~/providers/session.provider";
import { ApplicantDataLogic } from "~/modules/applicant-data/logic/applicant-data.logic";

export const meta: MetaFunction = () => {
  return [
    { title: "Developer Junior | R&S" },
    { name: "description", content: "Nuevas vacantes en Tismart!" },
  ];
};

export default function Vacancy() {
  const { vacancy, isAuthenticated, hasApplicantData } =
    useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-5">
      <div>
        <div className="flex justify-center items-end gap-2 mb-10">
          <h1 className="text-2xl font-semibold">{vacancy.jobPositionName}</h1>
          <span className="text-sm text-muted-foreground inline-block pb-0.5">
            Cod. {vacancy.rqCode}
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: vacancy.introduction }} />
      </div>
      <div className="flex flex-col gap-9">
        {/* Conocimientos */}
        <div>
          <h5 className="text-md font-semibold pb-3">
            Conocimientos necesarios
          </h5>
          <div
            className="pl-5"
            dangerouslySetInnerHTML={{ __html: vacancy.knowledge }}
          />
        </div>
        {/* Requisitos */}
        <div>
          <h5 className="text-md font-semibold pb-3">Funciones del puesto</h5>

          <div
            className="pl-5"
            dangerouslySetInnerHTML={{ __html: vacancy.jobFunctions }}
          />
        </div>
        {/* Beneficios */}
        <div>
          <h5 className="text-md font-semibold pb-3">Beneficios</h5>
          <div
            className="pl-5"
            dangerouslySetInnerHTML={{ __html: vacancy.benefits }}
          />
        </div>
        {isAuthenticated ? (
          <ApplicationSection
            hasApplicantData={hasApplicantData}
            applied={false}
          />
        ) : (
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <CommonApplicationButton />
          </div>
        )}
      </div>
    </div>
  );
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  const qrCode = params.id || "";
  const cookie = request.headers.get("cookie") || "";
  const { isAuthenticated } = await SessionProvider.get(cookie);

  const vacancy = await VacancyLogic.getVacancyByCode(qrCode);
  const applicantData = await ApplicantDataLogic.applicantData(request);

  const hasApplicantData = !!applicantData;

  if (vacancy === null) throw redirect("/");

  return data({ vacancy, isAuthenticated, hasApplicantData });
}
