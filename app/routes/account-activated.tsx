import type { MetaFunction } from '@remix-run/node';

import { CenterContent } from '@shared/components';
import { Button } from '@ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'Cuenta activada | R&S' },
    { name: 'description', content: '¡Empecemos con tu postulación!' },
  ];
};

export default function AccountActivated() {
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
            <Button className="mx-auto">Ir a mi perfil</Button>
          </div>
        </div>
      </div>
    </CenterContent>
  );
}
