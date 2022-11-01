import Navbar from "./components/Navbar";
import React from 'react';
import Footer from "./components/footer";
import './styles/style.css';
import './styles/home.css'
import './styles/khans.css'
import './styles/wars.css'
import './styles/centers.css'
import './styles/info.css'
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
      </HashRouter>  
      <Footer />
    </>
  );
}

export default App;
