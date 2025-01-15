import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between py-5 px-10 bg-[#F5F7FA]">
      <div className="w-36 cursor-pointer ">
      <Link to="/">

      <img src={logo} alt="logo"/>
      </Link>
      </div>
        <ul className="flex items-center space-x-8">
          <li className="hover:text-[#43B983]"><Link to="/">Home</Link></li>
          <li className="hover:text-[#43B983]"><Link to="/Service">Service</Link></li>
          <li className="hover:text-[#43B983]"><Link to="/Feature">Feature</Link></li>
          <li className="hover:text-[#43B983]"><Link to="/Product">Product</Link></li>
          <li className="hover:text-[#43B983]"><Link to="/Testimonial">Testimonial</Link></li>
          <li className="hover:text-[#43B983]"><Link to="/FAQ">FAQ</Link></li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="text-[#43B983]">
          Login
          </button>

          <button className="bg-[#4CAF4F] px-4 py-2 text-white rounded-md">
            Sign Up
          </button>

        </div>
      </nav>
    </header>
  );
};

export default Header;
