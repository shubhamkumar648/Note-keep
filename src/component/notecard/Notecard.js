import React from 'react'
import "./notecard.css"
import { FaArchive,FaTrash,FaEdit, FaThumbtack,  } from "react-icons/fa";

export const Notecard = ({noteContent}) => {

const {title,textarea} = noteContent

  return (
    <div>
    <div className="main-noteCard-container flex ">
       
     <div className='NoteCard_Header flex'>
      <p>{title}</p>
      <FaThumbtack/>
     </div>
          

   <p>{textarea}</p>

       <section className="cart-footer flex">
       <p>Create at</p>
       <FaEdit/>

       <FaArchive/>
       <FaTrash/>  


       </section>
     
   </div>
    </div>
  )
}
