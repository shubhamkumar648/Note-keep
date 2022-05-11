import React from "react";
import { Notecard, Notes, Sidebar } from "../../component";
import { Filter } from "../../component/filter/Filter";
import { useFilter } from "../../contexts/Filter-context";
import { useNotes } from "../../contexts/Notes-context";
import { priorityFilter } from "../../utils/priorityFilter";
import { sortByDateFun } from "../../utils/sortByDate";

import "./note.css";

export const Note = () => {
  const { notesState } = useNotes();
  const { notes } = notesState; 
 const {stateFilter} = useFilter()
  const {priority,sortBydate} = stateFilter



// const NotePriorityFilter = priorityFilter(priority,notes)
const SortByDateFilter = sortByDateFun(sortBydate,notes)

  return (
    <div>
      <main className="NoteList_layout flex flex-col">
        <Sidebar />

        <article>
        <Filter/>

          <Notes />
           <div className="Notecard">
          {SortByDateFilter.map((item) => {
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
