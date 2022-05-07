
 export const setNoteReducer = (state,action) => {

    switch(action.type) {
      
    case  "SET_TITLE":

    return {...state, title: action.payload}
            
    case "SET_TEXTAREA":
             
     return {...state, textarea: action.payload}


     case "RESET":

     return {title:"" , textarea:""}
     
    default:
        
    return state

    }
}