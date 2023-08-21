import { Input } from "../Input"
import { useForm } from "react-hook-form"
import { Select } from "../Select"
import {zodResolver} from "@hookform/resolvers/zod"
import { RegisterFormSchema } from "./registerFormSchema"
import { api } from "../../../Services/api"
import { useState } from "react"

export const RegisterForm = () =>{

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(RegisterFormSchema)
    })
    
    const [loading, setLoading] = useState(false)

    const userRegister = async (formData) =>{
        try {
            setLoading(true)
            await api.post("/users",formData)
            alert("cadastro realizado com sucesso")
        } catch (error) {
            console.log(error)
            if(error.response?.data === "Email already exists"){
                alert("Usuário já cadastrado")
            }
        }finally{
            setLoading(false)
        }
    }

    const submit = (formData) =>{
        userRegister(formData)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>          
            <Input  label="Nome" type="text" placeholder="Digite aqui seu nome" {...register ("name")} disabled={loading}/>
            {errors.name?.message}
            <Input  label="Email" type="email" placeholder="Digite aqui seu email" {...register ("email")} disabled={loading}/>
            {errors.email?.message}
            <Input  label="Senha" type="password" placeholder="Digite aqui sua senha" {...register ("password")} disabled={loading}/>
            {errors.password?.message}
            <Input  label="Confirmar senha" type="password" placeholder="Digite novamente sua senha" {...register ("confirmPassword")} disabled={loading}/>
            {errors.confirmPassword?.message}
            <Input  label="Bio" type="text" placeholder="Fale sobre você" {...register ("bio")} disabled={loading}/>
            {errors.bio?.message}
            <Input  label="Contato" type="text" placeholder="Opção de contato" {...register ("contact")} disabled={loading}/>
            {errors.contact?.message}

            <Select label="Selecionar módulo " {...register("course_module")} disabled={loading}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </Select>
            {errors.course_module?.message}


            <button disabled={loading}>Cadastrar</button>
        </form>
    )
}