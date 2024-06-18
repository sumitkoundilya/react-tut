import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Cart = lazy(() => import("./components/Cart"));
const Actors = lazy(() => import("./components/Actors"));

function AppRoutes({ setHeader }) {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/cart" element={<Cart setHeader={setHeader} />} />
          <Route exact path="/actors" element={<Actors setHeader={setHeader} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
