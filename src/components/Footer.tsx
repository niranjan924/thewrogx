import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col justify-between items-center gap-6">

        {/* Quick Links in a row */}
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          {[
            "Exchanges",
            "Exchange Policy",
            "Privacy Policy",
            "FAQ",
            "Support",
            "Shipping",
            "Terms of Service",
          ].map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-white transition duration-200">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          <p>&copy; 2016 All Rights Reserved</p>
          <p className="mt-1">WROGX — Powered by Passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
