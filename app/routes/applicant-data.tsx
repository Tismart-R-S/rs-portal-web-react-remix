import { ResumeSection } from "~/modules/profile/components";
import {
  redirect,
  json,
  MetaFunction,
  LoaderFunctionArgs,
  data,
  ActionFunctionArgs,
} from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { createFormAction } from "remix-forms";
import { ApplicantDataForm } from "~/modules/applicant-data/components";
import { applicantDataFormValidator } from "~/modules/applicant-data/utils/applicant-data-from-validator";
import { ApplicantDataLogic } from "~/modules/applicant-data/logic/applicant-data.logic";
import { useLoaderData } from "@remix-run/react";
import { ApplicantDataFormValidationType } from "~/modules/applicant-data/types/applicant-data-form.type";
import { SessionProvider } from "~/providers/session.provider";

export const meta: MetaFunction = () => {
  return [
    { title: "Datos de postulación | R&S" },
    { name: "description", content: "Mis datos de postulación" },
  ];
};

const formAction = createFormAction({ redirect, json });

export async function action({ request }: ActionFunctionArgs) {
  let cleanData: ApplicantDataFormValidationType;

  await formAction({
    request,
    schema: applicantDataFormValidator,
    mutation: makeDomainFunction(applicantDataFormValidator)(async (values) => {
      const targetProfiles = values.targetProfiles || [""];
      const technologies = values.technologies || [""];
      cleanData = { ...values, targetProfiles, technologies };
      return values;
    }),
    beforeSuccess: async () => {
      await ApplicantDataLogic.save(request, cleanData);
    },
  });

  return data({});
}

export async function loader({ request }: LoaderFunctionArgs) {
  const applicantData = await ApplicantDataLogic.applicantData(request);
  const cookie = request.headers.get("cookie") || "";
  const { token } = await SessionProvider.get(cookie);

  return data({ applicantData, apiUrl: process.env.API_RECRUITMENT!, token });
}

export default function PostulationData() {
  const { applicantData, apiUrl, token } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        Mis datos de postulación
      </h1>
      <div className="flex flex-col gap-10 my-8">
        <ApplicantDataForm formValues={applicantData} />
        <hr />
        <ResumeSection apiUrl={apiUrl} token={token} fileName={applicantData!.resumeFileName || ""} />
      </div>
    </div>
  );
}
