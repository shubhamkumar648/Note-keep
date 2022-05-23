import React from 'react'
import { Link } from 'react-router-dom'
import "./landingpage.css"

export const Landingpage = () => {
  return (
    <div className='landingPage'>
 
   <div className='landing'>

     <Link to="Login"><button className='btn btn__primary'>Join Now</button></Link>

   </div>

    </div>
  )
}
