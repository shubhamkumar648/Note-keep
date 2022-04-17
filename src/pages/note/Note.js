import React from "react";
import { Notecard, Notes, Sidebar } from "../../component";
import "./note.css";

const Note = () => {
  return (
    <div>
      <main className="NoteList_layout flex flex-col">
        <Sidebar />

        <article>
          <Notes />
          <Notecard/>
        </article>
      </main>
    </div>
  );
};

export { Note };
