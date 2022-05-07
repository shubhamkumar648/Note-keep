import axios from "axios";
import React from "react";
import { FaPalette, FaTag } from "react-icons/fa";
import { useReducer } from "react";
import { useAuth } from "../../contexts/Auth-context";
import { useNotes } from "../../contexts/Notes-context";
import { setNoteReducer } from "../../reducer/setNoteReducer";
import "./notes.css";
import { v4 as uuidv4 } from 'uuid';


const NoteColors = [
  {id: uuidv4(), color: ""},
  {id: uuidv4() , color: "teal"},
  {id: uuidv4(), color: "blue"},
  {id: uuidv4(), color: "red"},
  {id: uuidv4(), color: "brown"},
  {id: uuidv4(), color: "green"},

]

export const Notes = () => {
  const { notesDispatch } = useNotes();
  const { encodedToken } = useAuth();
  
  const [state, dispatch] = useReducer(setNoteReducer, {
    title: "",
    textarea: "",
    noteColor:"",
    isColorpalletVisible: false
  });

const { title, textarea,noteColor,isColorpalletVisible } = state;


const saveNotesHandler = async (e) => {
    e.preventDefault();
   
    let addNote = {
      title,
      textarea,
      noteColor
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
    <div className="main-text-container  flex flex-col mt-3">
    <form className={`note-color-${noteColor}`}onSubmit= {saveNotesHandler}>
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
        <div className="icons_container flex">
         <span onClick={() => dispatch({type:"COLOR_PALLET"})}> <FaPalette /> </span>
          <FaTag className="ml-1" />
        </div>
              {
                isColorpalletVisible && <div className="colorpallete_container"> 
                     {NoteColors.map(({id,color}) =>(
                     
                     <div key = {id} className={`note-colorBox note-color-${color}`}
                       onClick={() => dispatch({action:"SET_COLOR",payload:color})}
                     > 
                      </div>
                     )
                     )}
                </div>
              }

        <div className="addButton flex">
          <button type="submit" className="btn addButton">
            Add
          </button>
        </div>
      </section>
      </form>
    </div>
  );
};
