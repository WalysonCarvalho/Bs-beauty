import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Procedure } from "../pages/Procedure";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/procedure" element={<Procedure />} />
    </Routes>
  );
}