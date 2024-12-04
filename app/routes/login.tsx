import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { data } from '@remix-run/node';
import { useActionData } from '@remix-run/react';

import { CenterContent } from '@shared/components';
import { LoginForm } from '@modules/login/components';
import { Card as CardShadcn, CardHeader, CardTitle } from '@ui/card';
import { LoginLogic } from '@modules/login/logic/login.logic';

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
  const actionData = useActionData<typeof action>();
  return (
    <CenterContent>
      <CardShadcn className="max-w-[400px] w-full mx-auto pt-1">
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl text-center">Login Postulante</h1>
            {/* <p>{actionData?.errors}</p> */}
          </CardTitle>
        </CardHeader>
        <LoginForm />
      </CardShadcn>
    </CenterContent>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  let loginErrors = await LoginLogic.login(request);
  return data(loginErrors);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const isAuthenticated = await LoginLogic.authenticate(request);
  return data(isAuthenticated);
}
