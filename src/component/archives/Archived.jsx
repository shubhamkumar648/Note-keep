import axios from "axios";
import React from "react";
import { FaArchive, FaTrash, FaThumbtack } from "react-icons/fa";
import { useAuth } from "../../contexts/Auth-context";
import { useNotes } from "../../contexts/Notes-context";
import "./archived.css";

export const Archieved = ({ archives }) => {
  const { _id, title, textarea, noteColor, tags, priority, CreatedAt } =
    archives;
  const { encodedToken } = useAuth();
  const { notesDispatch } = useNotes();

  const unArchiveHandler = async() => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${_id}`,

        { note: archives },

        { headers: { authorization: encodedToken } }
      );

      console.log(response.status);
      if (response.status === 200) {
        notesDispatch({ type: "UNARCHIVED_NOTES", payload: archives });
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div
        className="main-noteCard-container flex flex-col"
        style={{ backgroundColor: noteColor }}
      >
        <div className="NoteCard_Header flex">
          <p>{title}</p>
          <FaThumbtack />
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

          <FaArchive onClick={unArchiveHandler} />
          <FaTrash />
        </section>
      </div>
    </div>
  );
};
