import React from "react"
import Header from "./Header";
import Seo from "./Seo";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main> 
      <Footer/>
    </>
  )
};

export default Layout;
