import { ApplicationForm, ResumeSection } from "~/modules/profile/components";
import { ActionFunction, redirect, json, MetaFunction } from "@remix-run/node";
import { applicationFormValidator } from "~/modules/profile/utils/appilcation-from-validator";
import { makeDomainFunction } from "domain-functions";
import { createFormAction } from "remix-forms";

export const meta: MetaFunction = () => {
  return [
    { title: "Datos de postulación | R&S" },
    { name: "description", content: "Mis datos de postulación" },
  ];
};

const mutation = makeDomainFunction(applicationFormValidator)(
  async (values) => {
    console.log(values)
    return values
  }
);

const formAction = createFormAction({ redirect, json });

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema: applicationFormValidator,
    mutation,
    //successPath: "/profile",
  });

export default function PostulationData() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">
        Mis datos de postulación
      </h1>
      <div className="flex flex-col gap-10 my-8">
        <ApplicationForm />
        <hr />
        <ResumeSection />
      </div>
    </div>
  );
}
