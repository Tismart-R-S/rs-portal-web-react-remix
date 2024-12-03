import { z } from "zod";

const onlyLettersRegex = /^[A-Za-zÁ-ÿá-ÿ\s]+$/;
const onlyLetterErrorMessage = "Solo puede ingresar letras";

export const profileFormValidator = z.object({
  names: z
    .string()
    .regex(onlyLettersRegex, onlyLetterErrorMessage)
    .min(1, "Ingrese el nombre de su país.")
    .max(50, "Debe tener como máximo 50 caracteres."),
  lastnames: z
    .string()
    .regex(onlyLettersRegex, onlyLetterErrorMessage)
    .min(1, "Ingrese el nombre de su ciudad.")
    .max(50, "Debe tener como máximo 50 caracteres."),
  email: z
    .string()
    .email("Debe ingresar un email válido")
    .min(1, "Ingrese su número de email."),
});
