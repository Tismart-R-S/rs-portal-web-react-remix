import { Button } from "@ui/button";
import { Label } from "@ui/label";
import { Input } from "@ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { MultiSelect } from "~/components/ui/multi-select";
import { targetProfileList } from "../data/target-profile-data";
import { technologiesList } from "../data/technologies-data";
import { workModeList } from "../data/work-mode-data";

import { applicantDataFormValidator } from "../utils/applicant-data-from-validator";
import { Form } from "~/shared/components";
import { ApplicantDataFormValidationType } from "../types/applicant-data-form.type";
import { Save } from "lucide-react";
import { Controller } from "react-hook-form";
import { ApplicantDataModel } from "~/data/models/applicant-data.model";

interface ApplicantDataFormProps {
  formValues: ApplicantDataModel | null;
}

const ApplicantDataForm = ({ formValues }: ApplicantDataFormProps) => {
  const initialValues: ApplicantDataFormValidationType = {
    country: formValues!.country ?? "",
    city: formValues!.city ?? "",
    documentType: formValues!.documentType ?? "",
    documentNumber: formValues!.documentNumber ?? "",
    expectedSalary: formValues!.expectedSalary ?? 0,
    phoneNumber: formValues!.phoneNumber ?? "",
    targetProfiles: formValues!.targetProfiles ?? [],
    yearsExperience: formValues!.yearsExperience ?? "",
    technologies: formValues!.technologies ?? [],
    seniority: formValues!.seniority ?? "",
    workModes: formValues!.workModes ?? [""],
    englishLevel: formValues!.englishLevel ?? "",
  };

  return (
    <Form
      schema={applicantDataFormValidator}
      mode="onSubmit"
      values={initialValues}
    >
      {({ register, Field, control, getValues }) => {
        const values = getValues();
        values.expectedSalary = Number(values.expectedSalary);

        const isButtonDisabled =
          JSON.stringify(values) === JSON.stringify(initialValues);

        return (
          <>
            <div className="flex justify-between items-center pb-4">
              <h5 className="text-md font-semibold">Datos de postulación</h5>
              <Button type="submit" disabled={isButtonDisabled}>
                Guardar
                <Save />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-1.5">
                <Field name="country">
                  {({ Errors }) => (
                    <>
                      <Label htmlFor="country">País</Label>
                      <Input
                        id="country"
                        autoComplete="off"
                        placeholder="Perú"
                        {...register("country")}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Field name="city">
                  {({ Errors }) => (
                    <>
                      <Label htmlFor="city">Ciudad</Label>
                      <Input
                        autoComplete="off"
                        id="city"
                        placeholder="Lima"
                        {...register("city")}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Tipo de documento</Label>
                <Field name="documentType">
                  {({ Errors }) => (
                    <>
                      <Controller
                        name="documentType"
                        control={control}
                        render={({ field }) => (
                          <Select
                            name={field.name}
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona..."></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="DNI">DNI</SelectItem>
                              <SelectItem value="Carnet de extrangería">
                                Carnet de extrangería
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="documentNumber">Nro de documento</Label>
                <Field name="documentNumber">
                  {({ Errors }) => (
                    <>
                      <Input
                        autoComplete="off"
                        id="documentNumber"
                        placeholder="12345678"
                        {...register("documentNumber")}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="expectedSalary">Expectativa salarial</Label>
                <Field name="expectedSalary">
                  {({ Errors }) => (
                    <>
                      <Input
                        autoComplete="off"
                        type="number"
                        id="expectedSalary"
                        placeholder="1500"
                        {...register("expectedSalary")}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phoneNumber">Número de celular</Label>
                <Field name="phoneNumber">
                  {({ Errors }) => (
                    <>
                      <Input
                        autoComplete="off"
                        id="phoneNumber"
                        placeholder="+51 987654321"
                        {...register("phoneNumber")}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Perfiles de interés</Label>
                <Field name="targetProfiles">
                  {({ Errors }) => (
                    <>
                      <Controller
                        name="targetProfiles"
                        control={control}
                        render={({ field }) => (
                          <>
                            <MultiSelect
                              {...field}
                              defaultValue={field.value}
                              onValueChange={(value) => field.onChange(value)}
                              options={targetProfileList}
                              variant={"secondary"}
                            />
                            {field.value &&
                              field.value.map((value) => (
                                <input
                                  key={value}
                                  type="hidden"
                                  name="targetProfiles[]"
                                  value={value}
                                />
                              ))}
                          </>
                        )}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="yearsExperience">Años de experiencia</Label>
                <Field name="yearsExperience">
                  {({ Errors }) => (
                    <>
                      <Input
                        autoComplete="off"
                        id="yearsExperience"
                        placeholder="0 - 1 años, 1 - 2, 2 - 3, 3 - 4, 5 a más"
                        {...register("yearsExperience")}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Tecnologías</Label>
                <Field name="technologies" id="technologies">
                  {({ Errors }) => (
                    <>
                      <Controller
                        name="technologies"
                        control={control}
                        render={({ field }) => (
                          <>
                            <MultiSelect
                              {...field}
                              defaultValue={field.value}
                              onValueChange={(value) => {
                                field.onChange(value);
                              }}
                              options={technologiesList}
                              variant={"secondary"}
                            />
                            {field.value &&
                              field.value.map((value) => (
                                <input
                                  key={value}
                                  type="hidden"
                                  name="technologies[]"
                                  value={value}
                                />
                              ))}
                          </>
                        )}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Seniority</Label>
                <Field name="seniority">
                  {({ Errors }) => (
                    <>
                      <Controller
                        name="seniority"
                        control={control}
                        render={({ field }) => (
                          <Select
                            name={field.name}
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="junior">Junior</SelectItem>
                              <SelectItem value="middle">Middle</SelectItem>
                              <SelectItem value="senior">Senior</SelectItem>
                              <SelectItem value="lead">Lead</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Modalidad de trabajo preferida</Label>
                <Field name="workModes" id="workModes">
                  {({ Errors }) => (
                    <>
                      <Controller
                        name="workModes"
                        control={control}
                        render={({ field }) => (
                          <>
                            <MultiSelect
                              {...field}
                              defaultValue={field.value}
                              options={workModeList}
                              onValueChange={(newValue) =>
                                field.onChange(newValue)
                              }
                              variant="secondary"
                            />
                            {field.value &&
                              field.value.map((value) => (
                                <input
                                  key={value}
                                  type="hidden"
                                  name="workModes[]"
                                  value={value}
                                />
                              ))}
                          </>
                        )}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label>Nivel de Inglés</Label>
                <Field name="englishLevel">
                  {({ Errors }) => (
                    <>
                      <Controller
                        name="englishLevel"
                        control={control}
                        render={({ field }) => (
                          <Select
                            name={field.name}
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="basico">Básico</SelectItem>
                              <SelectItem value="intermedio">
                                Intermedio
                              </SelectItem>
                              <SelectItem value="avanzado">Avanzado</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      <Errors className="text-red-500" />
                    </>
                  )}
                </Field>
              </div>
            </div>
          </>
        );
      }}
    </Form>
  );
};

export default ApplicantDataForm;
