"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleMenuToggle = () => {
    if (!isMenuOpen) setIsCartOpen(false);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartToggle = () => {
    if (!isCartOpen) setIsMenuOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };

  return (
    <>
      <header className="px-8 md:py-2 bg-[#2c3e50] shadow-md relative z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Mobile: Hamburger */}
          <div className="md:hidden">
            <button onClick={handleMenuToggle}>
              <Menu className="text-white w-6 h-6" />
            </button>
          </div>

          {/* Desktop: Brand left-aligned */}
          <img
            src="/wrogx_white_logo.png"
            alt="WrogX Logo"
            className="h-20 w-auto hidden md:block cursor-pointer"
          />

          {/* Desktop: Nav Links */}
          <nav className="hidden md:flex space-x-6 text-white font-medium">
            <Link href="/" className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>

            <Link
              href="/products"
              className="hover:text-gray-300 cursor-pointer"
            >
              Products
            </Link>
            <Link
              href="/about-us"
              className="hover:text-gray-300 cursor-pointer"
            >
              About Us
            </Link>
          </nav>

          {/* Mobile: Brand center */}
          <img
            src="/wrogx_white_logo.png"
            alt="WrogX Logo"
            className="h-20 w-auto ml-2 md:hidden"
          />

          {/* Cart icon (right aligned in all devices) */}
          <div className="md:flex md:items-center md:justify-end">
            <button onClick={handleCartToggle} className="ml-4">
              <ShoppingCart className="text-white w-6 h-6 cursor-pointer" />
            </button>
          </div>
        </div>
      </header>

      {/* Transparent overlay that closes menus */}
      {(isMenuOpen || isCartOpen) && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={closeMenus}
        />
      )}

      {/* Mobile: Left Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#34495e] text-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-500">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={closeMenus}>
            <X className="w-5 h-5 text-white cursor-pointer" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link href="/" onClick={closeMenus} className="block">
            Home
          </Link>
          <Link href="/products" onClick={closeMenus} className="block">
            Products
          </Link>
          <Link href="/about-us" onClick={closeMenus} className="block">
            About Us
          </Link>
        </nav>
      </div>

      {/* Right Drawer (Cart) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#34495e] text-white z-50 transform transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-500">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={closeMenus}>
            <X className="w-5 h-5 text-white cursor-pointer" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p>No items in cart.</p>
        </div>
      </div>
    </>
  );
};

export default Header;
