import React from "react"
import Header from "./Header";
import Footer from "./footer";
import Seo from "./Seo";
const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main> 
      <Footer />
    </>
  )
};

export default Layout;
