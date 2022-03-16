import React, { lazy, Suspense } from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import Loading from './components/Loading/Loading';
import FormData from './Pages/FormData'

export default function Routers(){
    const Home = lazy(() => import("./pages/Home"));
    return(
    <Routes>
        <Route index element={<FormData />} />
        <Route path="/*" element={<FormData />} />
        <Route path="home/*" element={
          <Suspense fallback={<Loading/>}>
            <Home />
          </Suspense>
        } />
      </Routes>
      )
}