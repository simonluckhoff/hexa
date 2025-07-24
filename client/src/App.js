import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Hexa.jsx';
import Index from './pages/Index.jsx';
import ColourPage from './pages/ColourPage.jsx';
import AddColourForm from './pages/NewColour.jsx';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
=       <Route path="/" element={<Navigate to="/Hexa" replace />} />
        <Route path="/Hexa" element={<Home/>} />
        <Route path="/Index" element={<Index/>} />
        <Route path="/Colour/:slug" element={<ColourPage/>} />
        <Route path="/New-Colour" element={<AddColourForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
