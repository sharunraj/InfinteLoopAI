import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/Aboutus';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
};

export default App;