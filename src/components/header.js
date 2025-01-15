// import React from "react";
// import { Link } from "gatsby";
// import logo from "../images/logo.png";
// const Header = () => {
//   return (
//     <header>
//       <nav className="flex items-center justify-between py-5 px-10 bg-[#F5F7FA]">
//       <div className="w-36 cursor-pointer ">
//       <Link to="/">

//       <img src={logo} alt="logo"/>
//       </Link>
//       </div>
//         <ul className="flex items-center space-x-8">
//           <li className="hover:text-[#43B983]"><Link to="/">Home</Link></li>
//           <li className="hover:text-[#43B983]"><Link to="/Service">Service</Link></li>
//           <li className="hover:text-[#43B983]"><Link to="/Feature">Feature</Link></li>
//           <li className="hover:text-[#43B983]"><Link to="/Product">Product</Link></li>
//           <li className="hover:text-[#43B983]"><Link to="/Testimonial">Testimonial</Link></li>
//           <li className="hover:text-[#43B983]"><Link to="/FAQ">FAQ</Link></li>
//         </ul>
//         <div className="flex items-center space-x-4">
//           <button className="text-[#43B983]">
//           Login
//           </button>

//           <button className="bg-[#4CAF4F] px-4 py-2 text-white rounded-md">
//             Sign Up
//           </button>

//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav className="flex items-center justify-between py-5 px-6 bg-[#F5F7FA]">
        {/* Logo Section */}
        <div className="w-36 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden  cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu />
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex items-center md:space-x-8 absolute lg:static top-20 left-0 w-full lg:w-auto bg-gray-100  z-50 shadow-lg lg:shadow-none transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <li className="hover:text-[#43B983] py-2 lg:py-0 text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#43B983] py-2 lg:py-0 text-center">
            <Link to="/Service">Service</Link>
          </li>
          <li className="hover:text-[#43B983] py-2 lg:py-0 text-center">
            <Link to="/Feature">Feature</Link>
          </li>
          <li className="hover:text-[#43B983] py-2 lg:py-0 text-center">
            <Link to="/Product">Product</Link>
          </li>
          <li className="hover:text-[#43B983] py-2 lg:py-0 text-center">
            <Link to="/Testimonial">Testimonial</Link>
          </li>
          <li className="hover:text-[#43B983] py-2 lg:py-0 text-center">
            <Link to="/FAQ">FAQ</Link>
          </li>

          {/* Action Buttons for Mobile */}
          <div className="md:hidden flex flex-col items-center space-y-4 py-4">
            <button className="text-[#43B983]">Login</button>
            <button className="bg-[#4CAF4F] px-4 py-2 text-white rounded-md">
              Sign Up
            </button>
          </div>
        </ul>

        {/* Action Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-[#43B983]">Login</button>
          <button className="bg-[#4CAF4F] px-4 py-2 text-white rounded-md">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
