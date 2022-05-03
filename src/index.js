import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { NotesProvider } from "./contexts/Notes-context";


// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <NotesProvider>
  <App />

  </NotesProvider>
</BrowserRouter>
  </React.StrictMode>,
);