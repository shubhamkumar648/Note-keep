import { createContext,useReducer,useContext } from "react";
import { filterReducerFunction } from "../reducer/filterReducer";

const CreateFilter = createContext()


export const FilterProvider = ({children}) => {

    const initialState = {
          priority: [],
          sortBydate:"",
          tags: []
    }

const [stateFilter, dispatchFilter] = useReducer(filterReducerFunction, initialState)

    return (

        <CreateFilter.Provider value={{stateFilter,dispatchFilter}}>
              {children}
        </CreateFilter.Provider>
           
    )
}

export const useFilter = () => useContext(CreateFilter)