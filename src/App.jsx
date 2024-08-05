import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom"
import Home from "./page/homeLayout";
import Footer from "./component/Footer";
import Login from "./component/loginpage/Login";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
