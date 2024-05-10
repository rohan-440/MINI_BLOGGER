import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState } from "react-router-dom";

// Router

import Login from './components/account/login';
import Register from './components/account/register';
import Header from './components/header/Header';
import Home from "./components/home/Home"
import Create from "./components/create/Create";
import Update from "./components/home/Update";



function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />


      </Routes>




    </BrowserRouter>
  );
}

export default App;
