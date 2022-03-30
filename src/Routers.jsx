import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Loading from "./components/Loading/index";
import FormData from "./Pages/FormData";
import Home from "./Pages/Home/Home";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route index element={<FormData />} />
        <Route path="/*" element={<FormData />} />
        <Route
          path="/home"
          element={
              <Home />
          }
        />
      </Routes>
      <Outlet />
    </>
  );
}
