import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./Pages/Header";
import './styles/Header.css'


function App() {
  return <div >
    <Router>
      <Header/>
      <Routes >
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  </div>;
}

export default App;
