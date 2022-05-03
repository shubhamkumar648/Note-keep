
export const NoteReducer = (state,action) => {
  switch(action.type) {
 
    case  "TITLE":

    return {...state, title: action.payload}
        
    case "TEXTAREA":
         
    return {...state, textarea: action.payload}


    default:
        return state
  }


}
