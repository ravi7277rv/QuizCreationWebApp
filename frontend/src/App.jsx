import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import FormBuilder from './Components/FormBuilder/FormBuilder';
import FormRendrer from './Components/FormRender/FormRendrer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={ FormBuilder } />
        <Route path='/formrenderer' Component={ FormRendrer } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
