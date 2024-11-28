import type { MetaFunction } from '@remix-run/node';
import { Facebook, Mail } from 'lucide-react';

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
import CenterContent from '@components/CenterContent';

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
        <CardContent className="pb-10">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="user">Correo o Documento de identidad</Label>
                <Input id="user" placeholder="abc@xyz.com o 12345678" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="passw">Contraseña</Label>
                <Input type="password" id="passw" placeholder="••••••••" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-5">
          <div className="flex w-full items-center px-6">
            <hr className="w-3/4" />
            <span className="inline-block text-nowrap px-2 text-center text-sm text-zinc-400">
              o continúa con
            </span>
            <hr className="w-3/4" />
          </div>
          <div className="flex justify-between gap-3 w-full">
            <Button variant="outline" className="w-full">
              <Mail /> Google
            </Button>
            <Button variant="outline" className="w-full">
              <Facebook /> Facebook
            </Button>
          </div>
          <Button className="w-full">Ingresar</Button>
          <Button variant="link">¿Olvidaste tu contraseña?</Button>
        </CardFooter>
      </CardShadcn>
    </CenterContent>
  );
}
