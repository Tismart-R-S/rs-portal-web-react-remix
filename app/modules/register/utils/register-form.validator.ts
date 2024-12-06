import { z } from "zod";

export const registerFormValidator = z
  .object({
    names: z
      .string()
      .min(2, "Debe tener al menos 2 caracteres.")
      .max(60, "Debe tener como máximo 60 caracteres."),
    lastNames: z
      .string()
      .min(2, "Debe tener al menos 2 caracteres.")
      .max(60, "Debe tener como máximo 60 caracteres."),
    email: z
      .string()
      .email("Debe ingresar un email válido")
      .max(60, "Debe tener como máximo 60 caracteres."),
    password: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres.")
      .max(20, "Debe tener como máximo 20 caracteres."),
    repeatPassword: z
      .string()
      .min(8, "Debe tener al menos 8 caracteres.")
      .max(20, "Debe tener como máximo 20 caracteres."),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["repeatPassword"], // Marca el error en repeatPassword
  });
