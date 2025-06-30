import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Contents from './pages/contents.jsx';
import ColourPage from './pages/ColourPage.jsx';
import AddColourForm from './pages/NewColour.jsx';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Hexa" element={<Home/>} />
        <Route path="/Index" element={<Contents/>} />
        <Route path="/Colour/:slug" element={<ColourPage/>} />
        <Route path="/New-Colour" element={<AddColourForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
