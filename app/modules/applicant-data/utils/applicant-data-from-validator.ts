import { z } from "zod";

const onlyLettersRegex = /^[A-Za-zÁ-ÿá-ÿ\s]+$/;
const onlyLetterErrorMessage = "Solo puede ingresar letras";
const onlyNumberRegex = /^\d+$/;
const onlyNumberErrorMessage = "Solo puede ingresar números";
const phoneWithCodeNumberRegex = /^\+(\d{1,4})\s?(\d{6,15})$/;
const phoneWithCodeErrorMessage = "Formato de número incorrecto";

export const applicantDataFormValidator = z.object({
  country: z
    .string()
    .regex(onlyLettersRegex, onlyLetterErrorMessage)
    .min(1, "Ingrese el nombre de su país.")
    .max(50, "Debe tener como máximo 50 caracteres."),
  city: z
    .string()
    .regex(onlyLettersRegex, onlyLetterErrorMessage)
    .min(1, "Ingrese el nombre de su ciudad.")
    .max(50, "Debe tener como máximo 50 caracteres."),
  documentType: z.union([
    z.enum(["DNI", "Canet de extrangería"], {
      message: "El tipo de documento debe ver DNI o Carnet de extrangería",
    }),
    z.string().min(1, "Debe seleccionar el tipo de documento"),
  ]),
  documentNumber: z
    .string()
    .regex(onlyNumberRegex, onlyNumberErrorMessage)
    .min(1, "Ingrese su número de documento."),
  expectedSalary: z
    .number({ message: "Debe ingresar un monto" })
    .min(1, "Debe ser mayor o igual a 0"),
  phoneNumber: z
    .string()
    .regex(phoneWithCodeNumberRegex, phoneWithCodeErrorMessage)
    .min(1, "Ingrese su número de teléfono o celular."),
  targetProfiles: z
    .array(z.string())
    .min(0, "Debe seleccionar almenos un perfil de interes")
    .optional(),
  yearsExperience: z.string().min(1, "Ingrese sus años de experiencia."),
  technologies: z
    .array(z.string())
    .min(0, "Debe seleccionar almenos una tecnología.")
    .optional(),
  seniority: z.string().min(1, "Debe escoger su seniority."),
  workModes: z
    .array(z.string())
    .min(0, "Debe seleccionar almenos una modalidad de trabajo."),
  englishLevel: z.string().min(1, "Debe escoger su nivel de inglés."),
});
