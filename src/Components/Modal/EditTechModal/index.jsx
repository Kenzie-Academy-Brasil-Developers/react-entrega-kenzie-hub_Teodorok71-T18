import { Input } from "../../Forms/Input"
import { Select } from "../../Forms/Select"

export const EditTechModal = ({setIsOpen}) =>{

   
    return(
        <main>
            <div>
                <h3>Tecnologia Detalhes</h3>
                <button  onClick={() => setIsOpen(false)}>X</button>
            </div>
            <form action="">
                <Input label="Nome" type="text" placeholder ="Material UI" />
                <Select label="status ">
                    <option value="">Iniciante </option>
                    <option value="">Intermediário</option>
                    <option value="">Avançado</option>
                </Select>
                <button type="submit" className="buttomPink">Salvar alterações</button>
            </form>
        </main>
    )
}