// import React from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/homeLayout";
import Footer from "./component/Footer";
import Login from "./page/loginpage/Login";
import SignUp from "./page/signUp/Signup";
import SignIn from "./page/signIn/SignIn";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
