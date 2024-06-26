import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Cart = lazy(() => import("./components/Cart"));
const Actors = lazy(() => import("./components/Actors"));

function AppRoutes({ setHeader, routeTo }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to={routeTo} />} />
        <Route exact path="/cart" element={<Cart setHeader={setHeader} />} />
        <Route exact path="/actors" element={<Actors setHeader={setHeader} />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
