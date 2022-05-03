import React from "react";
import {  Notecard, Notes, Sidebar } from "../../component";
import { useNotes } from "../../contexts/Notes-context";
import "./note.css";

export const Note = () => {

  const {stateNotes } = useNotes()
  const {noteList} = stateNotes
  return (
    <div>
      <main className="NoteList_layout flex flex-col">
        <Sidebar />

        <article>
          <Notes />

          {noteList.map((item) => (

            <div>
           <Notecard noteContent={item}/>

            </div>
          ))}
          
        </article>
      </main>
    </div>
  );
};

