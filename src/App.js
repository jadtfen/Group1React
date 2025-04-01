import React, { Component } from 'react';
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import Community from './pages/Community'
import Forums from './pages/Forums'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </>
  );

  //return <LoginPage />;
}

export default App;
