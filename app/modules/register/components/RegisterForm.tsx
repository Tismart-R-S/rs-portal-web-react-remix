import { Form } from "~/shared/components";
import { registerFormValidator } from "../utils/register-form.validator";

import { Label } from "@ui/label";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { CardContent, CardFooter } from "@ui/card";

const RegisterForm = () => {
  const initialValues = {
    names: "",
    lastNames: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  return (
    <Form schema={registerFormValidator} mode="onSubmit" values={initialValues}>
      {({ register, Field }) => {
        return (
          <>
            <CardContent className="pb-10">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Field name="names">
                    {({ Errors }) => (
                      <>
                        <Label htmlFor="name">Nombres</Label>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Peter"
                          autoComplete="off"
                          {...register("names")}
                        />
                        <Errors className="text-red-500 text-sm" />
                      </>
                    )}
                  </Field>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Field name="lastNames">
                    {({ Errors }) => (
                      <>
                        <Label htmlFor="lastname">Apellidos</Label>
                        <Input
                          type="text"
                          id="lastname"
                          placeholder="Parker"
                          autoComplete="off"
                          {...register("lastNames")}
                        />
                        <Errors className="text-red-500 text-sm" />
                      </>
                    )}
                  </Field>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Field name="email">
                    {({ Errors }) => (
                      <>
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input
                          type="email"
                          id="email"
                          placeholder="abc@xyz.com"
                          {...register("email")}
                        />
                        <Errors className="text-red-500 text-sm" />
                      </>
                    )}
                  </Field>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Field name="password">
                    {({ Errors }) => (
                      <>
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                          type="password"
                          id="password"
                          placeholder="••••••••"
                          {...register("password")}
                        />
                        <Errors className="text-red-500 text-sm" />
                      </>
                    )}
                  </Field>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Field name="repeatPassword">
                    {({ Errors }) => (
                      <>
                        <Label htmlFor="passw_repeat">Repetir Contraseña</Label>
                        <Input
                          type="password"
                          id="passw_repeat"
                          placeholder="••••••••"
                          autoComplete="off"
                          {...register("repeatPassword")}
                        />
                        <Errors className="text-red-500 text-sm" />
                      </>
                    )}
                  </Field>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-5">
              <Button type="submit" className="w-full">
                Registrar
              </Button>
            </CardFooter>
          </>
        );
      }}
    </Form>
  );
};

export default RegisterForm;
