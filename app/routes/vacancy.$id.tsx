import { data, redirect, type MetaFunction } from "@remix-run/node";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";

import { ApplicationSection } from "@modules/vacancy/components";
import VacancyLogic from "~/shared/logic/vacancy.logic";
import { useLoaderData } from "@remix-run/react";
import { CommonApplicationButton } from "~/modules/vacancy/components/application-section.components";
import { SessionProvider } from "~/providers/session.provider";
import { ApplicantDataLogic } from "~/modules/applicant-data/logic/applicant-data.logic";
import { toast } from "sonner";
import { useState } from "react";
import { VacancyApplicationLogic } from "~/modules/vacancy/logic/vacancy-application.logic";
import { Context } from "~/shared/interface/global.interface";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `${data?.vacancy.jobPositionName}- R&S` },
    { name: "description", content: "Nuevas vacantes en Tismart!" },
  ];
};

export default function Vacancy() {
  const {
    vacancy,
    isAuthenticated,
    hasResume,
    hasApplicantData,
    token,
    apiRecruitmentUrl,
    rqCode,
    isApplied,
  } = useLoaderData<typeof loader>();

  const [applied, setApplied] = useState<boolean>(isApplied);

  const handleVacancyApplication = async () => {
    console.log("Entro", apiRecruitmentUrl, token);

    const success = await VacancyApplicationLogic.vacancyApplication(
      token,
      rqCode,
      apiRecruitmentUrl
    );
    if (success) {
      toast.success("Postulación enviada con éxito!", { richColors: true });
      setApplied(true);
    } else {
      toast.error(
        "Hubo un error al enviar la postulación, por favor recargue la página e intente nuevamente.",
        { richColors: true }
      );
    }
  };

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
            handleVacancyApplication={handleVacancyApplication}
            hasApplicantData={hasApplicantData}
            hasResume={hasResume}
            applied={applied}
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

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  let isApplied = false;
  const rqCode = params.id || "";
  const cookie = request.headers.get("cookie") || "";
  const { isAuthenticated, token } = await SessionProvider.get(cookie);

  const vacancy = await VacancyLogic.getVacancyByCode(
    rqCode,
    context as Context
  );

  const applicantData = await ApplicantDataLogic.applicantData(
    request,
    context as Context
  );

  if (isAuthenticated)
    isApplied = await ApplicantDataLogic.verifyApplication(
      request,
      rqCode,
      context as Context
    );

  const hasApplicantData = !!applicantData;
  const hasResume = !!applicantData?.resumeFileName;

  console.log("isApplied", isApplied);
  if (vacancy === null) throw redirect("/");

  return data({
    vacancy,
    isAuthenticated,
    hasApplicantData,
    hasResume,
    token,
    rqCode,
    isApplied,
    apiRecruitmentUrl:
      process.env.API_RECRUITMENT ?? (context as Context).API_RECRUITMENT!,
  });
}
