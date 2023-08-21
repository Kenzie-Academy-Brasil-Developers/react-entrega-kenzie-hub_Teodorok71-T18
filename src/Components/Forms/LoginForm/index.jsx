import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Link } from "react-router-dom"
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./loginFormSchema"

export const LoginForm = () =>{

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:zodResolver(LoginFormSchema)
    })

    const submit = (formData) =>{
        console.log(formData)
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input  label="Email" type="email" placeholder="Digite aqui seu email" {...register ("email")}/>
            {errors.email?.message}
            <Input  label="Senha" type="password" placeholder="Digite aqui sua senha" {...register ("password")}/>
            {errors.password?.message}

            <button>Entrar</button>
            <label>Ainda não possui uma conta?</label>
            <Link to="register">Cadastre-se</Link>
        </form>
    )
}