import {MdEdit, MdDelete} from "react-icons/md"
export const TechCard =({tech}) =>{
    return(
        <li>
            <span>{tech.title}</span>
            <div>
                <span>{tech.status}</span>
                <button><MdEdit/></button>
                <button><MdDelete/></button>
            </div>
        </li>
    )
}