import type { MetaFunction } from '@remix-run/node';

import { Button } from '@ui/button';
import { Label } from '@ui/label';
import { Input } from '@ui/input';
import {
  Card as CardShadcn,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/card';
import { CenterContent } from '@shared/components';

export const meta: MetaFunction = () => {
  return [
    { title: 'Registrarse | R&S' },
    {
      name: 'description',
      content: 'Registrate para Postular; facil, seguro y rápido',
    },
  ];
};

export default function Register() {
  return (
    <CenterContent>
      <CardShadcn className="max-w-[400px] w-full mx-auto py-1">
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl text-center">Formulario de Registro</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-10">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombres</Label>
                <Input id="name" placeholder="Peter" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lastname">Apellidos</Label>
                <Input id="lastname" placeholder="Parker" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input type="email" id="email" placeholder="abc@xyz.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="passw">Contraseña</Label>
                <Input type="password" id="passw" placeholder="••••••••" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="passw_repeat">Repetir Contraseña</Label>
                <Input
                  type="password"
                  id="passw_repeat"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-5">
          <Button className="w-full">Registrar</Button>
        </CardFooter>
      </CardShadcn>
    </CenterContent>
  );
}
