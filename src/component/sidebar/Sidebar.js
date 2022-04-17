import React from 'react'
import { Link } from "react-router-dom";


export const Sidebar = () => {
  return (
    <div className='SideBar'>
<ul>

<li><Link className = "active link__nostyle fs-l" to = "/notes">Notes</Link></li>
<li><Link className="active link__nostyle fs-l " to = "/archives">Archives</Link></li>
<li><Link className="active link__nostyle fs-l " to = "/trash">Trash</Link></li>
         

</ul>
    </div>
  )
}
