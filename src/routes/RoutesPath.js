import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Archives, Note, Trash } from '../pages'


const RoutesPath = () => {

    return(
        <div>
<Routes>

<Route path = "/notes" element={<Note/>}/>
<Route path = "/archives" element = {<Archives/>}/>
<Route path = "/trash"  element = {<Trash/>}/>

</Routes>
</div>
    )
}


export {RoutesPath}