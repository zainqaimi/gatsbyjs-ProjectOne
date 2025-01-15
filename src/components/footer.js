import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Copyright */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Nexcent</h2>
          <p className="text-sm">
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Legal
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Status
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Up-to-Date */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay up to date
          </h3>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded"
            >
              <IoIosSend />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
