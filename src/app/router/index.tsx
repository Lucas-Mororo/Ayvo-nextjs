import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home";

export default function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<h1>teste</h1>} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}