import Mockman from "mockman-js";
import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/Auth-context'
import { Archives, Login, Note, Signup, Trash } from '../pages'
const RoutesPath = () => {
const {encodedToken} = useAuth()
    return(
        <div>
<Routes>

<Route path = "/notes" element={encodedToken ? <Note/> : <Navigate to = "/login" replace/>}/>
<Route path = "/archives" element = {<Archives/>}/>
<Route path = "/trash"  element = {<Trash/>}/>
<Route path = "/login"  element = {<Login/>} />
<Route path ="/signup" element = {<Signup/>} />
<Route path="/mockman" element ={<Mockman/>} />
</Routes>
</div>
    )
}


export {RoutesPath}