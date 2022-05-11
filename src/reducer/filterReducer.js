export const  filterReducerFunction = (state,action) => {
  console.log(state.type);
    
    switch(action.type) {
        
        case  "PRIORITY_ORDER":
          return {...state, priority: action.payload}
        
        default: 
         return state
    }
    
}

