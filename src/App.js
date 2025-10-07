import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import apiUri from "./config/api.js";

import { Analytics } from "@vercel/analytics/react"

import Home from "./pages/Home.js";
import Career from "./pages/Career.js";
import Blog from "./pages/Blog.js";
import About from "./pages/About.js";
import Trial from "./pages/Trial.js";
import Courses from "./pages/Courses.js";
import Termsandcondition from "./pages/Termsandcondition.js";
import Privecyandpolicy from "./pages/Privecyandpolicy.js";
import Developers from "./pages/Developers.js";

// ---------------------
// Visitor tracking hook with Axios
// ---------------------
function useTrackVisitor() {
  const location = useLocation();

  useEffect(() => {
    axios.post(`${apiUri}/keep-visitor-track`, {
      page: location.pathname
    })
    .then(response => {
      console.log("Visitor tracked:", response.data);
    })
    .catch(error => {
      console.error("Visitor tracking failed:", error);
    });
  }, [location]);
}

// ---------------------
// Main App component
// ---------------------
function AppRoutes() {
  useTrackVisitor(); // Track visitor on every route change

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/About" element={<About />} />
      <Route path="/Support" element={<Navigate to="/#support" replace />} />
      <Route path="/Trial" element={<Trial />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Termsandcondition" element={<Termsandcondition />} />
      <Route path="/Privecyandpolicy" element={<Privecyandpolicy />} />
      <Route path="/Developers" element={<Developers />} />
    </Routes>
  );
}

// ---------------------
// Wrap with BrowserRouter
// ---------------------
function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
