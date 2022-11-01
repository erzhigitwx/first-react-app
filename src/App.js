import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import React from 'react';
import './styles/style.css';
import './styles/home.css'
import './styles/khans.css'
import './styles/wars.css'
import './styles/centers.css'
import './styles/info.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
