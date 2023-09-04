import { Input } from "../Input"
import { useForm } from "react-hook-form"
import { Select } from "../Select"
import {zodResolver} from "@hookform/resolvers/zod"
import { RegisterFormSchema } from "./registerFormSchema"
import { useContext, useState } from "react"
import { UseContext } from "../../../providers/UseContext"
import { Link, } from "react-router-dom"
import Logo from "../../../assets/Logo.svg"
import styles from "./style.module.scss"

export const RegisterForm = () =>{

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(RegisterFormSchema)
    })
    
    const [loading, setLoading] = useState(false)

    const {userRegister} = useContext(UseContext)

    const submit = (formData) =>{
        userRegister(formData,setLoading)
    }

    return(
        <main className={styles.main}>
            <div className={styles.div}>
                <img src={Logo} alt="Kenzie Hub imagem ilustrativa" />
                <Link className="back" to="/">Voltar</Link>
            </div>
        <form className={styles.form} onSubmit={handleSubmit(submit)}> 
            <h1 className="Title1">Crie sua conta</h1>
            <label className="headline">Rapido e grátis, vamos nessa</label>        
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


            <button className="buttomPink" disabled={loading}>Cadastrar</button>
        </form>
        </main>
    )
}