import { Route, Routes, useNavigate } from "react-router-dom"
import { LoginPage } from "../Pages/Login"
import { RegisterPage } from "../Pages/Register"
import { DashboardPage } from "../Pages/Dashboard"
import { PrivateRoutes } from "./PrivateRoutes"

export const RoutesMain = () =>{  
    return(
        <Routes>
            <Route   path="/"element={<LoginPage/>} />
            <Route  path="/register" element={<RegisterPage/>}/>
            <Route element ={<PrivateRoutes/>}>
                <Route  path="/dashboard" element={<DashboardPage/>}/>
            </Route>
        </Routes>
    )
}