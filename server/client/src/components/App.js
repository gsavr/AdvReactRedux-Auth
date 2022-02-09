import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Welcome from "./Welcome";
import Signup from "./auth/Signup";
import Feature from "./Feature";
import Signout from "./auth/Signout";
import Signin from "./auth/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
