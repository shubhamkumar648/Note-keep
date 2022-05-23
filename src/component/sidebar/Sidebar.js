import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="SideBar">
      <ul>
        <li>
          <Link
            className="active link__nostyle fs-l sidebar_item_link active_state"
            to="/notes"
          >
            Notes
          </Link>
        </li>
        <li>
          <Link
            className="active link__nostyle fs-l sidebar_item_link active_state"
            to="/archives"
          >
            Archives
          </Link>
        </li>
        <li>
          <Link
            className="active link__nostyle fs-l sidebar_item_link active_state"
            to="/trash"
          >
            Trash
          </Link>
        </li>
      </ul>
    </div>
  );
};
