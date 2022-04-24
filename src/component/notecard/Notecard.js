import React from 'react'
import "./notecard.css"
import { FaArchive,FaTrash,FaEdit, FaThumbtack,  } from "react-icons/fa";

export const Notecard = () => {
  return (
    <div>
    <div className="main-noteCard-container flex flex-col">
       
     <div className='NoteCard_Header flex'>
      <p>note title</p>
      <FaThumbtack/>
     </div>
          

   <p>note message </p>

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
