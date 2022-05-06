import axios from "axios";
import React from "react";
import { FaPalette, FaTag } from "react-icons/fa";
import { useReducer } from "react";
import { useAuth } from "../../contexts/Auth-context";
import { useNotes } from "../../contexts/Notes-context";
import { setNoteReducer } from "../../reducer/setNoteReducer";
import "./notes.css";

export const Notes = () => {
  const {  notesDispatch } = useNotes();

  const { encodedToken } = useAuth();

  const [state, dispatch] = useReducer(setNoteReducer, {
    title: "",
    textarea: "",
  });

  const { title, textarea } = state;

  const handleClick = async (e) => {
    e.preventDefault();

    let addNote = {
      title,
      textarea,
    };

    try {
      const response = await axios.post(
        "/api/notes",
        { note: addNote },
       
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      if (response.status === 201) {
        notesDispatch({ type: "ADD_NOTE", payload: addNote });
        dispatch({ type: "RESET" });
      }
    } 
    
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-text-container flex flex-col mt-3">
      <input
        type="text"
        placeholder="Title"
        className="text-input"
        value={title}
        onChange={(e) =>
          dispatch({ type: "SET_TITLE", payload: e.target.value })
        }
      />
      <textarea
        placeholder="Take a note"
        className="text-area"
        row="4"
        column="50"
        value={textarea}
        onChange={(e) =>
          dispatch({ type: "SET_TEXTAREA", payload: e.target.value })
        }
      ></textarea>
      <section className="text-footer flex">
        <div className="icons_container">
          <FaPalette />
          <FaTag className="ml-1" />
        </div>

        <div className="addButton flex">
          <button onClick={handleClick} className="btn addButton">
            Add
          </button>
        </div>
      </section>
    </div>
  );
};
