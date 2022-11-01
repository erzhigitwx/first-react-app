import React from "react";
import {HashRouter as Router, Routes, Route } from "react-router-dom";
import Centers from '../pages/Centers'
import Khans from '../pages/Khans'
import Wars from '../pages/Wars'
import Info from '../pages/Info'
import Layout from "./Layout";
import Home from "../pages/Home"

function Navbar() { 
  return (
    <div id="navbar">
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="Khans" element={<Khans />} />
                <Route path="Wars" element={<Wars />} />
                <Route path="Centers" element={<Centers />}/>
                <Route path="Info" element={<Info />}/>
              </Route>
            </Routes>
          </Router>
    </div>
    );
}

export default Navbar;
