import { data, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { CenterContent } from "@shared/components";
import { Button } from "@ui/button";
import AccountActivatedLogic from "~/modules/account-activated/logic/account-activated.logic";

export const meta: MetaFunction = () => {
  return [
    { title: "Cuenta activada | R&S" },
    { name: "description", content: "¡Empecemos con tu postulación!" },
  ];
};

export default function AccountActivated() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <CenterContent>
      <div>
        <h4 className="text-2xl font-semibold text-center">
          🎉 ¡Cuenta activada con éxito! 🎉
        </h4>
        <p className="my-8 text-lg text-center">
          Gracias por verificar tu correo electrónico. Tu cuenta ha sido
          activada correctamente, y ya puedes disfrutar de todos nuestros
          servicios.
        </p>
        <div>
          <p className="text-center">
            Haz clic en el botón de abajo para acceder a tu perfil y completar
            el formulario de postulante.
          </p>
          <div className="flex justify-center my-6">
            {loaderData.isAuthenticated ? (
              <Button asChild className="mx-auto">
                <Link to="/applicant-data">Ir a mi perfil</Link>
              </Button>
            ) : (
              <Button asChild className="mx-auto">
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </CenterContent>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { isAuthenticated } = await AccountActivatedLogic.verifyShowPage(
    request
  );

  return data({ isAuthenticated });
}
