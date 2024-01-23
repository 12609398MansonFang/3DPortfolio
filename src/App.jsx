import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import Navbar from './Components/Navbar.jsx';
import Disclaimer from './Pages/Disclaimer.jsx';
import ProtectTheCheese from './Pages/ProtectTheCheese.jsx';
import Home from './Pages/Home.jsx';

import { RotationProvider } from './Components/RotationContext';



const App = () => {
  return (
    <RotationProvider>
      <Router>
        <Navbar />     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/protectthecheese" element={<ProtectTheCheese />} />
        </Routes>
      </Router>
    </RotationProvider>
  );
};

export default App;
