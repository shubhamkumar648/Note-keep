import React from 'react'
import "./notecard.css"

export const Notecard = () => {
  return (
    <div>
<div className="main-text-container flex flex-col">
       
    
           <div>
               Content
           </div>
          
       <section className="text-footer flex">
         <button className="btn">Delete</button>
         <button className="btn">Edit</button>

       </section>
     
   </div>
    </div>
  )
}
