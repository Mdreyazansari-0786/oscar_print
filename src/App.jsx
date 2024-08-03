// import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/homeLayout";
import Footer from "./component/Footer";
import Login from "./component/loginpage/Login";
import SignUp from "./component/signUp/Signup";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
