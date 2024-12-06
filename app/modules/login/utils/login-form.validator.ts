import { z } from "zod";

export const loginFormValidator = z.object({
  email: z
    .string()
    .email("Debe ingresar un email válido.")
    .max(60, "Debe tener como máximo 60 caracteres."),
  password: z
    .string()
    .min(8, "Debe tener al menos 8 caracteres.")
    .max(20, "Debe tener como máximo 20 caracteres."),
});
