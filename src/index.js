import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Products from './component/Products';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import logo from './Assets/logo.png';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chatbot from './component/Chatbot';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/pentonic' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path='/chatbot' element={<Chatbot />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/' element={<img src={logo} alt="Pentonic Logo" height="500px" width="350px" />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
r1eportWebVitals();
