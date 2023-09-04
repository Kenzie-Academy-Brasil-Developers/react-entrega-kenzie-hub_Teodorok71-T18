import { useContext } from "react"
import { UseContext } from "../../providers/UseContext"
import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"
import { TechList } from "../../Components/TechList"

export const DashboardPage = () =>{
    const{user,userLogout} =useContext(UseContext)

    return(
        <main className={styles.main}>
            <header className={styles.header}>
                <img src={Logo} alt="Kenzie Hub imagem ilustrativa"  />
                <button className="logout" onClick={userLogout}>Sair</button>
            </header>
            <div className={styles.div}>
                <p className="Title1">Olá, {user?.name}</p>
                <span className="headlineb">{user.course_module}</span>
            </div>
            <section className={styles.section}>
               <TechList/>
            </section>
        </main>
    )
}