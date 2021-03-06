import React from 'react'
import { Sidebar,Archieved } from '../../component'
import "./archives.css"
import { useNotes } from "../../contexts/Notes-context";

export const Archives = () => {
const{notesState} = useNotes()
  const {archives} = notesState
  return (
    <div>
    <main className="NoteList_layout flex flex-col">
        <Sidebar />

        <article className='archive flex'>

        {archives.map(item => {
             return(
          <div>
          <Archieved archives={item} key = {item._id}/>

          </div>
             )
        })}
          <div className='displaytext'>
        {!archives.length && (
          <div className='flex '>Your Archieve card show here 😀</div>
        )}
        </div>
        </article>
      
     
      </main>
      </div>
  )
}
