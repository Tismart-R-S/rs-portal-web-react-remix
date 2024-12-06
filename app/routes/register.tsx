import {
  redirect,
  json,
  data,
  ActionFunctionArgs,
  // LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { createFormAction } from "remix-forms";

import { Card as CardShadcn, CardHeader, CardTitle } from "@ui/card";
import { CenterContent } from "@shared/components";
// import { LoginLogic } from "~/modules/login/logic/login.logic";
import { RegisterForm } from "~/modules/register/components";
import { RegisterLogic } from "~/modules/register/logic/register.logic";
import { registerFormValidator } from "~/modules/register/utils/register-form.validator";

export const meta: MetaFunction = () => {
  return [
    { title: "Registrarse | R&S" },
    {
      name: "description",
      content: "Registrate para Postular; facil, seguro y rápido",
    },
  ];
};

const mutation = makeDomainFunction(registerFormValidator)(async (values) => {
  console.log(values);
  return values;
});

const formAction = createFormAction({ redirect, json });

export default function Register() {
  return (
    <CenterContent>
      <CardShadcn className="max-w-[400px] w-full mx-auto py-1">
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl text-center">Formulario de Registro</h1>
          </CardTitle>
        </CardHeader>
        <RegisterForm />
      </CardShadcn>
    </CenterContent>
  );
}

// export async function loader({ request }: LoaderFunctionArgs) {
//   const isAuthenticated = await LoginLogic.authenticate(request);
//   return data(isAuthenticated);
// }

export async function action({ request }: ActionFunctionArgs) {
  let registerErrors = "";

  await formAction({
    request,
    schema: registerFormValidator,
    mutation,
    beforeSuccess: async () => {
      registerErrors = await RegisterLogic.register(request);
    },
  });

  console.log({ registerErrors });
  return data(registerErrors);
}
