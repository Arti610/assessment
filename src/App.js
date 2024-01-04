import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import MyLibrary from "./pages/MyLibrary";
import RoundStatus from "./pages/RoundStatus";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Assessment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my_library" element={<MyLibrary />} />
          <Route path="/round_status" element={<RoundStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
