import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Archives, Login, Note, Signup, Trash } from '../pages'


const RoutesPath = () => {

    return(
        <div>
<Routes>

<Route path = "/notes" element={<Note/>}/>
<Route path = "/archives" element = {<Archives/>}/>
<Route path = "/trash"  element = {<Trash/>}/>
<Route path = "/login"  element = {<Login/>} />
<Route path ="/signup" element = {<Signup/>} />
</Routes>
</div>
    )
}


export {RoutesPath}