import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";

import EmailVerifiedLogic from "@modules/email-verified/logic/email-verified.logic";
import { CenterContent } from "@shared/components";
import { Button } from "@ui/button";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Verificar Correo | R&S" },
    { name: "description", content: "Verifica tu correo y estarás listo" },
  ];
};

export default function EmailVerified() {
  const loaderData = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (actionData?.message) {
      setMessage(actionData.message);

      // Ocultar el mensaje después de 5 segundos
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer); // Limpiar el temporizador
    }

    if (loaderData?.message) {
      setMessage(loaderData.message);

      // Ocultar el mensaje después de 5 segundos
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer); // Limpiar el temporizador
    }
  }, [actionData, loaderData]);

  return (
    <CenterContent>
      <div>
        <h4 className="text-2xl font-semibold text-center">
          Verifica tu correo electrónico
        </h4>
        <p className="my-8 text-lg text-center">
          Para completar tu registro y asegurar la protección de tu cuenta, te
          hemos enviado un correo electrónico de verificación. Por favor, revisa
          tu bandeja de entrada y haz clic en el enlace de confirmación para
          activar tu cuenta.
        </p>
        {loaderData?.isAuthenticated && (
          <div>
            <h5 className="text-md font-semibold text-center">
              ¿No recibiste el correo?
            </h5>
            <p className="text-center">
              Revisa tu carpeta de spam o correo no deseado, o haz clic en el
              botón de abajo para reenviar el correo de verificación.
            </p>
            <div className="flex justify-center my-6">
              <Form method="post">
                <Button className="mx-auto">Reenviar correo</Button>
              </Form>
            </div>
          </div>
        )}
        {message && <p>{message}</p>}
      </div>
    </CenterContent>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { isAuthenticated, email_token } =
    await EmailVerifiedLogic.verifyShowPage(request);

  if (email_token) {
    const response = await EmailVerifiedLogic.verifyEmailToken(
      request,
      email_token
    );
    return data({ ...response, isAuthenticated });
  }

  return data({ message: "", ok: true, isAuthenticated });
}

export async function action({ request }: ActionFunctionArgs) {
  const response = await EmailVerifiedLogic.resendVerificationEmail(request);
  return data(response);
}
