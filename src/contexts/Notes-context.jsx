
import React from 'react'

import { createContext,useReducer,useContext } from 'react';
import { NoteReducer } from '../reducer/Notereducer';


const NotesContext = createContext();

 const NotesProvider = ({children}) => {

    const initialState = {
           notes: []
    }

    const [stateNotes,dispatchNotes] = useReducer(NoteReducer,initialState)

  return (
    <NotesContext.Provider value = {{stateNotes ,dispatchNotes }}>
       {children}
    </NotesContext.Provider>
  )
}

const useNotes = () => useContext(NotesContext)

export {useNotes,NotesProvider}