import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../Pages/Login"
import { RegisterPage } from "../Pages/Register"
import { DashboardPage } from "../Pages/Dashboard"

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route  path="/" element={<LoginPage/>}/>
            <Route  path="register" element={<RegisterPage/>}/>
            <Route  path="dashboard" element={<DashboardPage/>}/>
        </Routes>
    )
}