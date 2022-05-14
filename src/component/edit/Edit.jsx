
import "./edit.css"
import {Notes} from "../index"

export const Edit = ({noteContent,setisEdit}) => {

    const closeModal = () => {

        setisEdit(false)
    }

    return (
          <div className="edit" onClick={closeModal}>

           <div className="edit-model" onClick={(e) => e.stopPropagation()}>
           <Notes noteContent={noteContent} setisEdit={setisEdit}/>
          </div>

        </div>
    )
}
