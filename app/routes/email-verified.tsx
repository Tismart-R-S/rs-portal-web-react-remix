import type { MetaFunction } from '@remix-run/node';

import CenterContent from '@components/CenterContent';
import { Button } from '@ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'Verificar Correo | R&S' },
    { name: 'description', content: 'Verifica tu correo y estarás listo' },
  ];
};

export default function EmailVerified() {
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
        <div>
          <h5 className="text-md font-semibold text-center">
            ¿No recibiste el correo?
          </h5>
          <p className="text-center">
            Revisa tu carpeta de spam o correo no deseado, o haz clic en el
            botón de abajo para reenviar el correo de verificación.
          </p>
          <div className="flex justify-center my-6">
            <Button className="mx-auto">Reenviar correo</Button>
          </div>
        </div>
      </div>
    </CenterContent>
  );
}
