import type { MetaFunction } from '@remix-run/node';

import { CenterContent } from '@shared/components';
import { LoginForm } from '@modules/login/components';
import { Card as CardShadcn, CardHeader, CardTitle } from '@ui/card';

export const meta: MetaFunction = () => {
  return [
    { title: 'Login | R&S' },
    {
      name: 'description',
      content: 'Logueate y Postula; facil, seguro y rápido',
    },
  ];
};

export default function Login() {
  return (
    <CenterContent>
      <CardShadcn className="max-w-[400px] w-full mx-auto pt-1">
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl text-center">Login Postulante</h1>
          </CardTitle>
        </CardHeader>
        <LoginForm />
      </CardShadcn>
    </CenterContent>
  );
}
