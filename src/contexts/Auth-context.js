import { createContext,useContext,useState } from "react";

const AuthCreate = createContext()


  export const AuthProvider = ({children}) => {
      
    const [user, setUser ] = useState()
    const encodedToken = localStorage.getItem("token");

    return(

      <AuthCreate.Provider value={{user,setUser,encodedToken}}>
             {children}
      </AuthCreate.Provider>

    )    
}

export const useAuth = () => useContext(AuthCreate)

