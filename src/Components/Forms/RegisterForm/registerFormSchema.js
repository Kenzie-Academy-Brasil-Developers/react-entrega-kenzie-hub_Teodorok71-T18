import { z } from "zod"

export const RegisterFormSchema = z.object({
  name: z.string().min(1).max(255).nonempty("O nome é obrigatório."),
  email: z.string().email("Insira um email válido.").max(255).nonempty("O email é obrigatório."),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres.").regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número."
  ),
  confirmPassword: z.string().nonempty("confirmar senha é obrigatória"),
  bio: z.string().min(1, "A bio é obrigatória."),
  contact: z.string().min(1, "O contato é obrigatório."),
  course_module: z.string().min(1, "O módulo do curso é obrigatório."),
}).refine(({password, confirmPassword}) =>  password === confirmPassword, {
    message: "as senhas não correspondem",
    path: ["confirmPassword"]
});