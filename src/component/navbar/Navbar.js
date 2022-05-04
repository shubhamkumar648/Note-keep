import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../../contexts/Auth-context';


 const Navbar = () => {
   const {setUser,user} = useAuth()


const submitHandler = (e) => {
         e.preventDefault() 
         localStorage.removeItem("token")    
          setUser(null)
          
}
  return(
    <div>
         <header className="ecom_header flex">
        <div className="brand_name">
          <Link className="link__nostyle fs-xl brand_color" to="/notes">
            Simple Todo
          </Link>
        </div>

        <div className="nav flex">
        <form onSubmit ={submitHandler}>
          <button className="btn btn__primary" type="submit">
           
              {user ? "Logout" :"Login"}
          </button>
          </form>
        </div>
      </header>
    </div>
  )
}

export{Navbar}