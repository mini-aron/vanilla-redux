import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routers/Home";
import Detail from "../routers/Detail";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<Detail/>}></Route>
      </Routes>
    </Router>
  );
}
