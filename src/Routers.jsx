import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Loading from "./components/Loading/index";
import FormData from "./Pages/FormData";

export default function Routers() {
  const Home = React.lazy(() => import("./Pages/Home/Home"));
  return (
    <>
      <Routes>
        <Route index element={<FormData />} />
        <Route path="/*" element={<FormData />} />
        <Route
          path="/home"
          element={
            <React.Suspense fallback={<Loading />}>
              <Home />
            </React.Suspense>
          }
        />
      </Routes>
      <Outlet />
    </>
  );
}
