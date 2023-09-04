import {MdEdit, MdDelete} from "react-icons/md"
import { EditTechModal } from "../Modal/EditTechModal"
import { useContext, useState } from "react"
import { TechContext } from "../../providers/TechContext"
import styles from "./style.module.scss"

export const TechCard =({tech}) =>{

    const [isOpen, setIsOpen] = useState(false)

    const {deleteNote}= useContext(TechContext)

    return(
        <li className={styles.li}>
            <span className="TitleLi">{tech.title}</span>
            <div className={styles.div}>
                <span className="headlineL">{tech.status}</span>
                <button onClick={() => setIsOpen(true)}><MdEdit/></button>
                {isOpen? <EditTechModal setIsOpen={setIsOpen}></EditTechModal> :null}
                <button onClick={() => deleteNote(tech.id)}><MdDelete/></button>
            </div>
        </li>
    )
}