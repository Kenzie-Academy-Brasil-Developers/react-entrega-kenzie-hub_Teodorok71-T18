import { useContext } from "react"
import { UseContext } from "../../providers/UseContext"


export const DashboardPage = () =>{
    const{user,userLogout} =useContext(UseContext)

    return(
        <div>
            <h1>Dashboard</h1>
            <p>{user?.name}</p>
            <button onClick={userLogout}>Sair</button>
            </div>
    )
}