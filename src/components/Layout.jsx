import React from "react";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <About />
      <br />
      <br />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
