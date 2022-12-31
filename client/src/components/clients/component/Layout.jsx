import React from "react";
import { Outlet } from "react-router-dom";
import Preloader from "../component/Preloader";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const Layout = () => {
  return (
    <>
      <Preloader />
      <Outlet />
      <Navbar />
      <Footer />
    </>
  );
};

export default Layout;
