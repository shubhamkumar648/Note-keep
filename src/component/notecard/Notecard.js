import React from "react";
import "./notecard.css";
import { FaArchive, FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";
import { Edit } from "../edit/Edit";
import axios from "axios";
import { useAuth } from "../../contexts/Auth-context";
import { useNotes } from "../../contexts/Notes-context";

export const Notecard = ({ noteContent }) => {

  const { _id, title, textarea, noteColor, tags, priority, CreatedAt } = noteContent;

  const [isEdit, setisEdit] = useState(false);

  const { encodedToken } = useAuth();
  const { notesDispatch } = useNotes();

  const archivedHandler = async () => {

     try 
    {
      const response = await axios.post(
        `/api/notes/archives/${_id}`,
        { note: noteContent },

        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(response.status);

      if (response.status === 201) {
        notesDispatch({ type: "ARCHIVE_NOTE", payload: noteContent });
      }
    } 
    catch (error) {
      console.log(error.response);
    }
   
  };

  const deleteHandler = async() => {

     try 
    {
      const response = await axios.delete(
        `/api/notes/${_id}`,

        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(response.status);

      if (response.status === 200) {
        notesDispatch({ type: "DELETE_NOTE", payload: noteContent });
      }
    } 
    catch (error) {
      console.log(error.response);
    }
   
  };


  return (
      <div
        className="main-noteCard-container flex flex-col"
        style={{ backgroundColor: noteColor }}
      >
        <div className="NoteCard_Header flex flex-col">
          <p className="fs-md">{title}</p>
          <p className="fs-md">{textarea}</p>

        </div>

      
        <section className="cart-footer flex pt-3">
          <span className="fs-xs font-xl">
            Created At:{" "}
            {`${new Date(CreatedAt).toLocaleDateString()} ${new Date(
              CreatedAt
            ).toLocaleString("en-Us", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}`}
          </span>
          <FaEdit onClick={() => setisEdit((prev) => !prev)} />

          <FaArchive onClick={archivedHandler} />
          <FaTrash  onClick={deleteHandler}/>
        </section>

        {isEdit && <Edit noteContent={noteContent} setisEdit= {setisEdit} />}
          

          <div className="flex tag-container">
       <div><span className="note-Function">{tags}</span> </div>
       <div><span className="note-Function">{priority}</span> </div>
        </div>

      </div>
  );
};
