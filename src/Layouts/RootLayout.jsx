import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer.jsx";

const RootLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
