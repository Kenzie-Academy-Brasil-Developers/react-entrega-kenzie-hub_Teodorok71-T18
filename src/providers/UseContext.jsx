import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Services/api";
import { toast } from "react-toastify";

export const UseContext = createContext({})

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    const navigate = useNavigate ()

    useEffect(() =>{
        const getUser = async () =>{
            const token = localStorage.getItem("@TOKEN")  
            try {
                const {data} = await api.get("/profile",{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                setUser(data)
                navigate("dashboard")
            } catch (error) {
               
            }
        }
        getUser()
    }, [])
 

    const userLogout = () =>{
        setUser(null)
        navigate("/")
        localStorage.removeItem("@USERID")
        localStorage.removeItem("@TOKEN")
        toast.warning("Deslogando...")
    }

    const userLogin = async (formData,setLoading) =>{
        try {
            setLoading(true)
            const{data} = await api.post("/sessions", formData)
            setUser(data.user)
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)
            navigate("dashboard")
            toast.success("Você está logado")
        } catch (error) {
            console.log(error)
            if(error.response?.data.message ==='Incorrect email / password combination'){
                toast.error("Email ou senha incorreto")
            }
        }finally{
            setLoading(false)
        }
    }

    const userRegister = async (formData,setLoading) =>{
        try {
            setLoading(true)
            await api.post("/users",formData)
            navigate("/")
            toast.success("cadastro realizado com sucesso")
        } catch (error) {
            console.log(error)
            if(error.response?.data.message === 'Email already exists'){
                toast.error("Usuário já cadastrado")
            }
        }finally{
            setLoading(false)
        }
    }

    return(
        <UseContext.Provider value={{user, userLogout, userLogin, userRegister}}>
            {children}
        </UseContext.Provider>
    )
}