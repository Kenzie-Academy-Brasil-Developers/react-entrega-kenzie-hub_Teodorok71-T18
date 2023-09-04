import { useContext } from "react"
import { UseContext } from "../../providers/UseContext"
import { Navigate, Outlet } from "react-router-dom"



export const PrivateRoutes = () =>{
    const {user} = useContext(UseContext)

    return user? <Outlet/> : <Navigate to="/"/>
}