import React from "react";
import { FaPalette, FaTag } from "react-icons/fa";
import { useNotes } from "../../contexts/Notes-context";
import "./notes.css";

export const Notes = () => {
  const {stateNotes ,dispatchNotes} = useNotes()

  const {title, textarea, noteList} = stateNotes

  const handleClick = () => {
    dispatchNotes([...noteList, { title: title, textarea: textarea }]);
  };

  return (
    <div className="main-text-container flex flex-col mt-3">
      <input
        type="text"
        placeholder="Title"
        className="text-input"
        value={title}
        onChange = {(e) => dispatchNotes({type:"TITLE", payload:e.target.value})}
      />
             
      <textarea
        placeholder="Take a note"
        className="text-area"
        row="4"
        column="50"
        value={textarea}
        onChange={(e) => dispatchNotes({type:"TEXTAREA",payload:e.target.value})}
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
      {/* {noteList.map((item) => (  
      <div>
      <Notecard  noteContent={item}/>
      </div>

      ))} */}

      {title-textarea}
    </div>
  );
};

