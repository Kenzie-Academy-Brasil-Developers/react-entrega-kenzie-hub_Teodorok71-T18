import { useContext } from "react"
import { UseContext } from "../../providers/UseContext"
import Logo from "../../assets/Logo.svg"
import styles from "./style.module.scss"

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
                <h2 className="Title1">Que pena! Estamos em desenvolvimento :( </h2>
                <h3 className="Title2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</h3>
            </section>
        </main>
    )
}