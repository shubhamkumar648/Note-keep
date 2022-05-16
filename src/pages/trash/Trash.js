import React from 'react'
import { Sidebar } from '../../component'
import { Trashcard } from '../../component/trash/Trashcard'
import { useNotes } from '../../contexts/Notes-context'

export const Trash = () => {
  const {notesState} = useNotes()
  const {trash} = notesState
  return (
    <div>
       <main className="NoteList_layout flex flex-col">
        <Sidebar />

        <article className='archive flex'>

        {trash.map(item => {
             return(
          <div>
          <Trashcard trash={item} key={item._id}/>
          </div>
             )
        })}
        </article>
      </main>
    </div>
  )
}
