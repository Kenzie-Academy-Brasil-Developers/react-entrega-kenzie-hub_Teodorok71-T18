import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { Link, } from "react-router-dom"
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginFormSchema } from "./loginFormSchema"
import { useContext, useState } from "react"
import { UseContext } from "../../../providers/UseContext"
import Logo from "../../../assets/Logo.svg"
import styles from "./style.module.scss"

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
        <main className={styles.main}>
            <img src={Logo} alt="Kenzie Hub imagem ilustrativa"  />
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <h1 className="Title1">Login</h1>
            <Input  label="Email" type="email" placeholder="Digite aqui seu email" {...register ("email")} disabled={loading}/>
            {errors.email?.message}
            <Input  label="Senha" type="password" placeholder="Digite aqui sua senha" {...register ("password")} disabled={loading}/>
            {errors.password?.message}
            <div className={styles.div}>
            <button disabled={loading} className='buttomPink'>Entrar</button>
            <label className="headline">Ainda não possui uma conta?</label>
            <Link className="buttomGrey" to="register">Cadastre-se</Link>
            </div>
        </form>
        </main>
    )
}