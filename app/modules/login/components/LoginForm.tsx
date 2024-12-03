import { Form } from '@remix-run/react';
import { Facebook, Mail } from 'lucide-react';

import { Button } from '@ui/button';
import { Label } from '@ui/label';
import { Input } from '@ui/input';
import { CardContent, CardFooter } from '@ui/card';

const LoginForm = () => {
  return (
    <Form method="post">
      <CardContent className="pb-10">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Correo elctrónico</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="abc@xyz.com"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
            />
          </div>
        </div>
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
          <Button type="button" variant="outline" className="w-full">
            <Mail /> Google
          </Button>
          <Button type="button" variant="outline" className="w-full">
            <Facebook /> Facebook
          </Button>
        </div>
        <Button type="submit" className="w-full">
          Ingresar
        </Button>
        <Button type="button" variant="link">
          ¿Olvidaste tu contraseña?
        </Button>
      </CardFooter>
    </Form>
  );
};

export default LoginForm;
