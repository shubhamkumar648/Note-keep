import { BsFilterLeft } from "react-icons/bs";
import { useState } from "react";
import "./Filter.css";
import { useFilter } from "../../contexts/Filter-context";

export const Filter = () => {
  const { stateFilter, dispatchFilter } = useFilter();
  const [display, setDisplay] = useState(false);
  const { priority, sortBydate, home,daily,weekly,work,other } = stateFilter;
  return (
    <>
      <div className="Filter_Main_Container">
        <span
          className="fs-xl Filter-icon-Container"
          onClick={() => setDisplay(!display)}
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
                    type="radio"
                    id="high"
                    name="sort-by-priority"
                    checked={priority === "high"}
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
                    type="radio"
                    id="medium"
                    name="sort-by-priority"
                    checked={priority === "medium"}
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
                    type="radio"
                    id="low"
                    name="sort-by-priority"
                    checked={priority === "low"}
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
                  checked={work}
                  onChange={() => dispatchFilter({type:"work"})}
                   />
                  <label>Work</label>
                </li>
                <li>
                  <input type="checkbox"
                  checked={daily}
                  onChange={() => dispatchFilter({type:"daily"})}
                   />
                  <label>Daily</label>
                </li>
                <li>
                  <input type="checkbox"
                  checked={home}
                  onChange={() => dispatchFilter({type:"home"})}
                   />
                  <label>Home</label>
                </li>
                <li>
                  <input type="checkbox"
                   checked={weekly}
                   onChange={() => dispatchFilter({type:"weekly"})}
                   />
                  <label>Weekly</label>
                </li>
                <li>
                  <input type="checkbox"
                  checked={other}
                  onChange={() => dispatchFilter({type:"other"})}
                   />
                  <label>Other</label>
                </li>
             
              </ul>
            </div>

            <button className="btn btn__secondary">Clear all</button>
          </div>
        </div>
      )}
    </>
  );
};
