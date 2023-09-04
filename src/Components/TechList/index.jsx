import { useContext, useState } from "react"
import { UseContext } from "../../providers/UseContext"
import { TechCard } from "../TechCard"
import { CreatTechModal } from "../Modal/CreateTechModal"
import styles from "./style.module.scss"

export const TechList = () =>{
    const {tech} = useContext(UseContext)
    const [isOpen, setIsOpen] = useState(false)
    return(
        <main className={styles.main}>
            <div className={styles.div}>
                <h2 className="Title3">Tecnologias</h2>
                <button onClick={() => setIsOpen(true)}>+</button>
                {isOpen? <CreatTechModal setIsOpen={setIsOpen}></CreatTechModal> :null}
            </div>
           <ul className={styles.ul}>
                {tech.map (tech => (
                    <TechCard key={tech.id} tech={tech}/>
                ))}
           </ul>
        </main>
    )
}