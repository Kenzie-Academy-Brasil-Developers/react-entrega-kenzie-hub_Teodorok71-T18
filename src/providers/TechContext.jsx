import { createContext, useContext, useState} from "react";
import { api } from "../Services/api";
import { UseContext } from "./UseContext";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const {tech, setTech} = useContext(UseContext)
    const [editTech, setEdirTech] = useState(null)

  
    const createTech = async (formData) => {
        const token = localStorage.getItem("@TOKEN")   
        try {               
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTech([...tech, data]);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteNote = async (deletingId) =>{
        try {
            const token = localStorage.getItem("@TOKEN")
             await api.delete(`/users/techs/${deletingId}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
             })

             const newTechList = tech.filter(tech => tech.id !== deletingId)
             setTech(newTechList)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TechContext.Provider value={{ createTech, deleteNote  }}>
            {children}
        </TechContext.Provider>
    )
}
