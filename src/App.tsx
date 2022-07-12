import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";




function App() {

  return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="/home" element={<Products />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
