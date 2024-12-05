import { Form } from "@remix-run/react";

import { Label } from "@ui/label";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { CardContent, CardFooter } from "@ui/card";

const RegisterForm = () => {
  return (
    <Form method="post">
      <CardContent className="pb-10">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Nombres</Label>
            <Input type="text" name="names" id="name" placeholder="Peter" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="lastname">Apellidos</Label>
            <Input
              type="text"
              name="lastNames"
              id="lastname"
              placeholder="Parker"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="abc@xyz.com"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="passw">Contraseña</Label>
            <Input
              type="password"
              name="password"
              id="passw"
              placeholder="••••••••"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="passw_repeat">Repetir Contraseña</Label>
            <Input
              type="password"
              name="repeatPassword"
              id="passw_repeat"
              placeholder="••••••••"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-5">
        <Button type="submit" className="w-full">
          Registrar
        </Button>
      </CardFooter>
    </Form>
  );
};

export default RegisterForm;
