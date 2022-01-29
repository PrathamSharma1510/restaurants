import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enter from "./Enter";
import React from "react";
import Home from "./Home";
import Points from "./Points";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enter />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
