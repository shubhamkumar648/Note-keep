import React from "react";
import { FaPalette, FaTag } from "react-icons/fa";
import { useNotes } from "../../contexts/Notes-context";
import "./notes.css";

const Notes = () => {

  const {stateNotes ,dispatchNotes} = useNotes()

  const {notes} = stateNotes
  return (
    <div className="main-text-container flex flex-col mt-3">
       
    
        <input type="text" placeholder="Title" className="text-input"  />

        <textarea placeholder="Take a note" className="text-area" row="4" column="50"></textarea>

        <section className="text-footer flex">
           <div className="icons_container">
           <FaPalette/>
           <FaTag className="ml-1"/>
          </div>

          <div className="addButton flex">
          <button className="btn addButton">Add</button>

          </div>

        </section>
      
    </div>

 

  );
};

export { Notes };
