import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import FormData from './Pages/FormData'
import Header from './components/Header/Header';
export default function App(){

  return(
    <> 
      <Header/>
      <Routes>
            <Route index element={<FormData />} />
            <Route path="/" element={<FormData />} />
            <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}