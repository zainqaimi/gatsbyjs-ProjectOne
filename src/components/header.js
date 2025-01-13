import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between p-5 bg-slate-500">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
