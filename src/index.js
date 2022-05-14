import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider } from "./contexts/Notes-context";
import { AuthProvider } from "./contexts/Auth-context";
import { FilterProvider } from "./contexts/Filter-context";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
