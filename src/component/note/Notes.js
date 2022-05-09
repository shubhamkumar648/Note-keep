import axios from "axios";
import React from "react";
import { FaPalette, FaTag } from "react-icons/fa";
import { useReducer } from "react";
import { useAuth } from "../../contexts/Auth-context";
import { useNotes } from "../../contexts/Notes-context";
import { setNoteReducer } from "../../reducer/setNoteReducer";
import "./notes.css";
import { v4 as uuidv4 } from "uuid";



const TagCategories = [
  { id: uuidv4(), tag: "" },
  { id: uuidv4(), tag: "work" },
  { id: uuidv4(), tag: "important" },
  { id: uuidv4(), tag: "secondary" },
  { id: uuidv4(), tag: "college" },
  { id: uuidv4(), tag: "home" },
];

export const Notes = () => {

  const NoteColors = [
    { id: uuidv4(), color: "" },
    { id: uuidv4(), color: "teal" },
    { id: uuidv4(), color: "blue" },
    { id: uuidv4(), color: "red" },
    { id: uuidv4(), color: "brown" },
    { id: uuidv4(), color: "green" },
  ];
  const { notesDispatch } = useNotes();
  const { encodedToken } = useAuth();

  const [state, dispatch] = useReducer(setNoteReducer, {
    title: "",
    textarea: "",
    noteColor: "",
    isColorpalletVisible: false,
    tags: "",
    isTagCategoreis: false,
  });

  const {
    title,
    textarea,
    noteColor,
    isColorpalletVisible,
    isTagCategoreis,
    tags,
  } = state;

  const saveNotesHandler = async (e) => {
    e.preventDefault();

    let addNote = {
      title,
      textarea,
      noteColor,
      tags,
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
      console.log(response.data,"res");

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
    <div className={`main-text-container  flex flex-col mt-3 note-color-${noteColor}`}>
      <form onSubmit={saveNotesHandler}>

      <div className="InputContainer flex flex-col">

        <input
          type="text"
          className="input"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
         <textarea
          placeholder="Take a note"
          className="input note_textarea"
          rows="5"
          cols="20"
          value={textarea}
          onChange={(e) =>
            dispatch({ type: "SET_TEXTAREA", payload: e.target.value })
          }
        ></textarea>
           </div>
          <section className="text-footer flex">

           <div className="icons_container flex">
            <span onClick={() => dispatch({ type: "COLOR_PALLET" })}>
              {" "}
              <FaPalette />{" "}
            </span>
            <span onClick={() => dispatch({ type: "TAG_CATEGORIES" })}>
              <FaTag className="ml-1" />
             </span>
          </div>
       
          {isColorpalletVisible && (
            <div className="colorpallete_container">
              {NoteColors.map(({id, color }) => (
                
                <div
                  key={id}
                  className={`note-color note-color-${color}`}
                  onClick={() =>
                    dispatch({type: "SET_COLOR", payload: color })
                  }

                ></div>
              ))}
            </div>
          )}

          {isTagCategoreis && (
            <div className="tagCategories_container">
              {TagCategories.map(({ tag, id }) => (
                <div
                  key={id}
                  onClick={() => dispatch({type: "SET_TAG", payload: tag })}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}

          {tags !== "" && <div className="displayTags">{tags}</div>}

          <div className="addButton flex">
            <button type="submit" className="btn btn__primary">
              Add
            </button>
          </div>

        </section>
      </form>
    </div>
  );
};
