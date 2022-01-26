import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import ErrorPage from "./components/Pages/ErrorPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
        <Header />
        <div>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
