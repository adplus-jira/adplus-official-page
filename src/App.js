import React from 'react';
import './assets/css/common.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IntroPage from './pages/Intro';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/intro" element={<IntroPage />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
