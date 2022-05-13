import { BsFilterLeft } from "react-icons/bs";
import { useState } from "react";
import "./Filter.css";
import { useFilter } from "../../contexts/Filter-context";

export const Filter = () => {
  const { stateFilter, dispatchFilter } = useFilter();
  const [display, setDisplay] = useState(false);
  const { priority, sortBydate, tags } = stateFilter;

  return (
    <>
      <div className="Filter_Main_Container">
        <span
          className="fs-xl Filter-icon-Container"
          onClick={() => setDisplay(prev => !prev)}
        >
          {" "}
          Sort By
          <BsFilterLeft className="FilterIcon" />{" "}
        </span>
      </div>

      {display && (
        <div className="FilterPopupBox-main-container">
          <div className="FilterPopUpBox flex flex-col">
            {/* sort by Priority */}
            <div>
              <h5>Sort by Priority</h5>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="high"
                    name="sort-by-priority"
                    checked={priority.includes("high")}
                    value="high"
                    onChange={(e) =>
                      dispatchFilter({
                        type: "PRIORITY_ORDER",
                        payload: e.target.value,
                      })
                    }
                  />
                  <label> High</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="medium"
                    name="sort-by-priority"
                    checked={priority.includes("medium")}
                    value="medium"
                    onChange={(e) =>
                      dispatchFilter({
                        type: "PRIORITY_ORDER",
                        payload: e.target.value,
                      })
                    }
                  />
                  <label> Medium</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="low"
                    name="sort-by-priority"
                    checked={priority.includes("low")}
                    value="low"
                    onChange={(e) =>
                      dispatchFilter({
                        type: "PRIORITY_ORDER",
                        payload: e.target.value,
                      })
                    }
                  />
                  <label> Low</label>
                </li>
              </ul>
            </div>

            <hr />
            {/* sort by date */}
            <div className="">
              <h5>Sort by date</h5>
              <ul>
                <li>
                  <input
                    type="radio"
                    name="sort_byDate"
                    id="oldest"
                    value="oldest"
                    checked={sortBydate === "oldest"}
                    onChange={(e) =>
                      dispatchFilter({
                        type: "SORT_BY_DATE",
                        payload: e.target.value,
                      })
                    }
                  />
                  <label>Oldest</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="sort_byDate"
                    id="latest"
                    value="latest"
                    checked={sortBydate === "latest"}
                    onChange={(e) =>
                      dispatchFilter({
                        type: "SORT_BY_DATE",
                        payload: e.target.value,
                      })
                    }
                  />
                  <label>Latest</label>
                </li>
              </ul>
            </div>
            <hr />
            {/* sort by tags Category */}
            <div>
              <h5>Sort by Tags</h5>
              <ul>
                <li>
                  <input 
                  type="checkbox"
                  name = "filter_by_tags"
                  value="work"
                  checked={tags.includes("work")}
                  onChange={(e) => dispatchFilter({type:"SORT_BY_TAGS" ,payload: e.target.value})}
                   />
                  <label>Work</label>
                </li>
                <li>
                  <input type="checkbox"
                   name = "filter_by_tags"
                   value="daily"
                  checked={tags.includes("daily")}
                  onChange={(e) => dispatchFilter({type:"SORT_BY_TAGS" ,payload: e.target.value})}
                   />
                  <label>Daily</label>
                </li>
                <li>
                  <input type="checkbox"
                   name = "filter_by_tags"
                   value="home"
                  checked={tags.includes("home")}
                  onChange={(e) => dispatchFilter({type:"SORT_BY_TAGS" ,payload: e.target.value})}
                   />
                  <label>Home</label>
                </li>
                <li>
                  <input type="checkbox"
                   name = "filter_by_tags"
                   value="weekly"
                   checked={tags.includes("weekly")}
                   onChange={(e) => dispatchFilter({type:"SORT_BY_TAGS" ,payload: e.target.value})}
                   />
                  <label>Weekly</label>
                </li>
                <li>
                  <input type="checkbox"
                   name = "filter_by_tags"
                   value="other"
                  checked={tags.includes("other")}
                  onChange={(e) => dispatchFilter({type:"SORT_BY_TAGS" ,payload: e.target.value})}
                   />
                  <label>Other</label>
                </li>
             
              </ul>
            </div>

            <button className="btn btn__secondary" onClick ={()=>dispatchFilter({type: "CLEAR_ALL"})}>Clear all</button>
          </div>
        </div>
      )}
    </>
  );
};
