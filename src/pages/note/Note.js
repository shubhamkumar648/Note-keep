import React from "react";
import { Notecard, Notes, Sidebar } from "../../component";
import { useNotes } from "../../contexts/Notes-context";
import "./note.css";
export const Note = () => {
  const { notesState } = useNotes();
  const { notes } = notesState;
  return (
    <div>
      <main className="NoteList_layout flex flex-col">
        <Sidebar />

        <article>
          <Notes />

           <div className="Notecard">
          {notes.map((item) => {
            return (
                <Notecard noteContent={item} />
            );
          })}
          </div>

        </article>
      </main>
    </div>
  );
};
