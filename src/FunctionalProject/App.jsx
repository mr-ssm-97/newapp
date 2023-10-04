import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
export default function App() {
  var [language, setLanguage] = useState("hi");
  var [path, setPath] = useState(window.location.pathname.slice(1));
  // let language = "hi";
  // let path = window.location.pathname.slice(1);
  // let path = useRef(window.location.pathname.slice(1));
  function changeLanguage(lan) {
    setLanguage(lan);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar change={changeLanguage} changePath={setPath} />
        <Routes>
          <Route path="/" element={<Home q="Home" lan={language} />} />
          <Route path="*" element={<Home q={path} lan={language} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
