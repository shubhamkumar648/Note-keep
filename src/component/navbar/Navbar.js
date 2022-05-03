import React from 'react'
import { Link } from "react-router-dom";

 const Navbar = () => {


  return(
    <div>
         <header className="ecom_header flex">
        <div className="brand_name">
          <Link className="link__nostyle fs-xl brand_color" to="/notes">
            Simple Todo
          </Link>
        </div>

        <div className="nav flex">
          <button className="btn btn__primary">
            <Link className="link__nostyle" to="/login">
              {" "}
              Login
            </Link>
          </button>
        </div>
      </header>
    </div>
  )
}

export{Navbar}