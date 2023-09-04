import { useForm } from "react-hook-form"
import { Input } from "../../Forms/Input"
import { Select } from "../../Forms/Select"
import { useContext } from "react"
import { TechContext } from "../../../providers/TechContext"

export const CreatTechModal = ({setIsOpen}) =>{
    const {register,handleSubmit} = useForm()

    const {createTech } = useContext(TechContext)


    const submit = (formData) =>{
            createTech(formData)
    }
    return(
        <div role="dialog">
            <div>
                <h3>Cadrastar Tecnologia</h3>
                <button onClick={() => setIsOpen(false)}>X</button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <Input label="Nome" type="text" placeholder = "Tecnologia" {...register ("title")}/>
                <Select label="Selecionar status" {...register ("status")}>
                    <option value="Iniciante">Iniciante </option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Select>

                <button className="buttomPink" type="submit">Cadrastar Tecnologia</button>
            </form>
        </div>
    )
}