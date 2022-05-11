import { BsFilterLeft   } from "react-icons/bs";
import { useState } from "react";
import "./Filter.css"
import { useFilter } from "../../contexts/Filter-context";

export const Filter = () => {

  const {stateFilter, dispatchFilter} = useFilter()
  const [ display, setDisplay] = useState(false)
    const {priority} = stateFilter
    console.log(stateFilter);
    return (
      <>
      <div className="Filter_Main_Container">

    <span className="fs-xl Filter-icon-Container" onClick={() => setDisplay(!display)}> Sort By<BsFilterLeft className="FilterIcon"/> </span>

       </div>
            
         {display &&  <div className="FilterPopupBox-main-container">
       <div className="FilterPopUpBox flex flex-col">

        {/* sort by Priority */}
            <div>

            <h5>Sort by Priority</h5>
              <ul>
               <li>
                <input 
                 type="radio"
                 id="high"
                  name= "sort-by-priority" 
                  checked={priority==="high"}
                  value="high"
                  onChange={(e) =>dispatchFilter({type:"PRIORITY_ORDER" ,payload:e.target.value })}
                  />
                <label> High</label>
               </li>
               <li>
               <input 
               type="radio" 
               id="medium"
                name="sort-by-priority" 
                checked={priority==="medium"}
                value="medium"
                onChange={(e) =>dispatchFilter({type:"PRIORITY_ORDER" ,payload:e.target.value })}

                />
                <label> Medium</label>
               </li>
               <li>
               <input 
                type="radio"
                id="low"
                name = "sort-by-priority" 
                checked={priority==="low"}
                value="low"
                onChange={(e) => dispatchFilter({type:"PRIORITY_ORDER", payload: e.target.value})}

                />
                <label> Low</label>
               </li>

              </ul>
            
            </div>

                          <hr/>
          {/* sort by date */}
            <div className="">
            <h5>Sort by date</h5>
            <ul>
              <li>
              <input type="radio" name = "sort-byDate" value="old" />
            <label>Old</label>
              </li>
              <li>
              <input type="radio" name = "sort-byDate" value="new" />
            <label>New</label>
              </li>
            </ul>
            </div>
                       <hr/>
            {/* sort by tags Category */}
            <div>
            <h5>Sort by Tags</h5>
             <ul>
            <li>
            <input type="checkbox" />
            <label>Work</label>
            </li>
            <li>
            <input type="checkbox" />
            <label>Important</label>
            </li>
            <li>
            <input type="checkbox" />
            <label>College</label>
            </li>
            <li>
            <input type="checkbox" />
            <label>Home</label>
            </li>
            <li>
            <input type="checkbox" />
            <label>Secondary</label>
            </li>
            <li>
            <input type="checkbox" />
            <label>Home</label>
            </li>
            </ul>
            </div>

            <button className="btn btn__secondary">Clear all</button>
       </div>
       </div>
      }
       </>
    )
}