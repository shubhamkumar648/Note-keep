import React from "react";
import "./notecard.css";
import { FaArchive, FaTrash, FaEdit, FaThumbtack } from "react-icons/fa";

export const Notecard = ({ noteContent }) => {
  const { title, textarea,noteColor,tags,priority,CreatedAt} = noteContent;
  
  return (
    <div>
      <div className="main-noteCard-container flex flex-col" style={{backgroundColor: noteColor}}>
        <div className="NoteCard_Header flex" >
          <p>{title}</p>
          <FaThumbtack />
        </div>

        <p>{textarea}</p>
        <div>{tags}</div>
         <div>{priority}</div>
        <section className="cart-footer flex pt-3">
          <span className="fs-xs font-xl">
          Created At: {" "}
        {`${new Date(CreatedAt).toLocaleDateString()} ${new Date(CreatedAt).toLocaleString("en-Us",{
          hour: "numeric",
          minute: "numeric",
          hour12: true
        })}`}</span>
          <FaEdit />

          <FaArchive />
          <FaTrash />
        </section>
      </div>
    </div> 
  );
};
