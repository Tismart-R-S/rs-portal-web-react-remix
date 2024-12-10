import { Edit, Save } from "lucide-react";

import { Button } from "@ui/button";
import { Label } from "@ui/label";
import { Input } from "@ui/input";
import { useState } from "react";
import { Form } from "~/shared/components";
import { profileFormValidator } from "../utils/profile-form.validatior";
import { ProfileFormValidationType } from "../types/profile-form";
import { UserResponseModel } from "~/data/models/user.model";

interface AccountFormProps {
  formValues: UserResponseModel | null;
}

const AccountForm = ({ formValues }: AccountFormProps) => {
  const initialValues: ProfileFormValidationType = {
    names: formValues?.names || "",
    lastnames: formValues?.lastNames || "",
    email: formValues?.email || "",
  };

  const [enableEdit, setEnableEdit] = useState(false);
  const handleEnableEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setEnableEdit(!enableEdit);
  };

  return (
    <Form schema={profileFormValidator} mode="onChange" values={initialValues}>
      {({ register, Field }) => (
        <>
          <div className="flex justify-between items-center pb-4">
            <h5 className="text-md font-semibold">Datos de la cuenta</h5>
            {enableEdit ? (
              <Button type="submit">
                Guardar
                <Save />
              </Button>
            ) : (
              <Button type="button" onClick={(e) => handleEnableEdit(e)}>
                Editar
                <Edit />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="names">Nombres</Label>
              <Field name="names">
                {({ Errors }) => (
                  <>
                    <Input
                      disabled={!enableEdit}
                      id="names"
                      placeholder="Peter"
                      {...register("names")}
                    />
                    <Errors className="text-red-500" />
                  </>
                )}
              </Field>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="lastnames">Apellidos</Label>
              <Field name="lastnames">
                {({ Errors }) => (
                  <>
                    <Input
                      disabled={!enableEdit}
                      id="lastnames"
                      placeholder="Parker"
                      {...register("lastnames")}
                    />
                    <Errors className="text-red-500" />
                  </>
                )}
              </Field>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Field name="email">
                {({ Errors }) => (
                  <>
                    <Input
                      readOnly
                      type="email"
                      id="email"
                      placeholder="abc@xyz.com"
                      {...register("email")}
                    />
                    <Errors className="text-red-500" />
                  </>
                )}
              </Field>
            </div>
          </div>
        </>
      )}
    </Form>
  );
};

export default AccountForm;
