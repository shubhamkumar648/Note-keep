export const  filterReducerFunction = (state,action) => {
  // console.log(state.type);
  // console.log(action.payload);  

    switch(action.type) {
        
        case  "PRIORITY_ORDER":
          return {...state, priority: action.payload}
        
          case "SORT_BY_DATE":
            return {...state, sortBydate: action.payload}
             
            case "work":

            return {...state, work: !state.work}

            case "weekly": 

            return {...state, weekly: !state.weekly}

            case "home":

            return {...state, home: !state.home}

            case "other":

            return {...state, other: !state.other}

            case "daily":

            return {...state, daily: !state.daily}
        default: 
         return state;
    }
    
}

