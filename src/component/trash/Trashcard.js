import React from "react";
import {  FaTrash, FaThumbtack } from "react-icons/fa";
import { useNotes } from "../../contexts/Notes-context";
import "./trashcard.css";
import {MdOutlineRestoreFromTrash} from "react-icons/md"

export const Trashcard = ({ trash }) => {
  const {_id,title, textarea, noteColor, tags, priority, CreatedAt } =
    trash;

  const { notesDispatch } = useNotes();

  return (
    <div>
      <div
        className="main-noteCard-container flex flex-col"
        style={{ backgroundColor: noteColor }}
      >
        <div className="NoteCard_Header flex">
          <p>{title}</p>
        </div>
        <p>{textarea}</p>
        <div>{tags}</div>
        <div>{priority}</div>
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
          <FaTrash  title="Delete trash" onClick={() => notesDispatch({type:"DELETE_FOREVER",payload: _id})}/>
          <MdOutlineRestoreFromTrash  title="Restore trash" onClick={() => notesDispatch({type:"RESTORE_TRASH",payload: trash })}/>


        </section>
      </div>
    </div>
  );
};
