import Mockman from "mockman-js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../component";
import { Archives, Landingpage, Login, Note, Signup, Trash } from "../pages";

const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/notes" element={<RequireAuth> <Note /> </RequireAuth>}/>
        <Route path="/archives" element={<RequireAuth> <Archives /></RequireAuth>} />
        <Route path="/trash" element={ <RequireAuth> <Trash /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
};

export { RoutesPath };
