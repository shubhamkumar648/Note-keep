import React from "react";
import { Notecard, Notes, Sidebar } from "../../component";
import { Filter } from "../../component/filter/Filter";
import { useFilter } from "../../contexts/Filter-context";
import { useNotes } from "../../contexts/Notes-context";
import "./note.css";
export const Note = () => {
  const { notesState } = useNotes();
  const { notes } = notesState; 
 const {stateFilter} = useFilter()
  const {priority} = stateFilter

const priorityFilter = (state,data) => {
  
switch(state.priority) {

  case "high":

  return data.filter(item => item.priority === "high")

  case "medium":
  return data.filter(item => item.priority === "low")

  case "low":
    return data.filter(item => item.priority === "high")

    default:

    return data
}

}

const NotePriorityFilter = priorityFilter(priority,notes)

  return (
    <div>
      <main className="NoteList_layout flex flex-col">
        <Sidebar />

        <article>
        <Filter/>

          <Notes />
           <div className="Notecard">
           
          {NotePriorityFilter.map((item) => {
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
