import React from "react";
import { Notecard, Notes, Sidebar } from "../../component";
import { Filter } from "../../component/filter/Filter";
import { useFilter } from "../../contexts/Filter-context";
import { useNotes } from "../../contexts/Notes-context";
import { FilterbyTag } from "../../utils/filterbyTag";
import { priorityFilter } from "../../utils/priorityFilter";
import { sortByDateFun } from "../../utils/sortByDate";

import "./note.css";

export const Note = () => {
  const { notesState } = useNotes();
  const { notes } = notesState;
  const { stateFilter } = useFilter();
  const { priority, sortBydate, tags } = stateFilter;

  const NotePriorityFilter = priorityFilter(notes, priority);
  const SortByTags = FilterbyTag(NotePriorityFilter, tags);
  const SortByDateFilter = sortByDateFun(SortByTags, sortBydate);

  return (
    <div>
      <main className="NoteList_layout flex flex-col">
        <Sidebar />

        <article>
          <Filter />

          <Notes />
          <div className="Notecard">
            {SortByDateFilter.map((item) => {
              return <Notecard noteContent={item} key={item._id} />;
            })}
          </div>
          <div className="displaytext">
          {!SortByDateFilter.length && (
          <div className='flex  '>Your note card appear here 😀</div>
        )}
        </div>
        </article>
      </main>
    </div>
  );
};
