import { ResumeSection } from "~/modules/profile/components";
import {
  ActionFunction,
  redirect,
  json,
  MetaFunction,
  LoaderFunctionArgs,
  data,
} from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { createFormAction } from "remix-forms";
import { ApplicantDataForm } from "~/modules/applicant-data/components";
import { applicantDataFormValidator } from "~/modules/applicant-data/utils/applicant-data-from-validator";
import { ApplicantDataLogic } from "~/modules/applicant-data/logic/applicant-data.logic";
import { useLoaderData } from "@remix-run/react";
import { ApiRecruitmentResponseModel } from "~/data/models/global.model";
import { ApplicantDataModel } from "~/data/models/applicant-data.model";

export const meta: MetaFunction = () => {
  return [
    { title: "Datos de postulación | R&S" },
    { name: "description", content: "Mis datos de postulación" },
  ];
};

const mutation = makeDomainFunction(applicantDataFormValidator)(
  async (values) => {
    console.log(values);
    return values;
  }
);

const formAction = createFormAction({ redirect, json });

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema: applicantDataFormValidator,
    mutation,
    //successPath: "/profile",
  });

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("Loader");
  const applicantData = await ApplicantDataLogic.applicantData(request);

  return data({ applicantData });
}

export default function PostulationData() {
  const { applicantData } = useLoaderData<typeof loader>();
  const { data } =
    applicantData as ApiRecruitmentResponseModel<ApplicantDataModel | null>;
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        Mis datos de postulación
      </h1>
      <div className="flex flex-col gap-10 my-8">
        <ApplicantDataForm formValues={data} />
        <hr />
        <ResumeSection />
      </div>
    </div>
  );
}
