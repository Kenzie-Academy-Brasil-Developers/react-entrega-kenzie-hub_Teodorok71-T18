import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Link, useNavigate } from "react-router-dom"
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./loginFormSchema"
import { api } from "../../../Services/api"
import { useContext, useState } from "react"
import { UseContext } from "../../../providers/UseContext"

export const LoginForm = () =>{

    const {register,handleSubmit, formState:{errors}} = useForm({
        resolver:zodResolver(LoginFormSchema)
    })

    const [loading, setLoading] = useState(false)

    const {userLogin} = useContext(UseContext)

    const submit = (formData) =>{
        userLogin(formData,setLoading)
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input  label="Email" type="email" placeholder="Digite aqui seu email" {...register ("email")} disabled={loading}/>
            {errors.email?.message}
            <Input  label="Senha" type="password" placeholder="Digite aqui sua senha" {...register ("password")} disabled={loading}/>
            {errors.password?.message}

            <button disabled={loading}>Entrar</button>
            <label>Ainda não possui uma conta?</label>
            <Link to="register">Cadastre-se</Link>
        </form>
    )
}