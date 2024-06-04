import React from 'react';
import './assets/css/common.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import IntroPage from './pages/Intro';
import Header from './components/Header';
import Works from './pages/Works';
import QnA from './pages/QnA';
import SuccessList from './pages/SuccessList';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} exact ></Route>
        <Route path="/intro" element={<IntroPage />}></Route>
        <Route path="/work" element={<Works />}></Route>
        <Route path="/success" element={<SuccessList />}></Route>
        <Route path="/qna" element={<QnA />}></Route>
        <Route path="/contact" element={<Contact />}></Route> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
