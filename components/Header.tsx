"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Menu,
  X,
  MapPin,
  User,
  Search,
} from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const [showLogin, setShowLogin] = useState(false);
  const [location, setLocation] = useState("New Delhi");

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Section - Logo + Location */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-green-600">
            GroxMart
          </Link>

          {/* Location Selector */}
          <div className="hidden sm:flex items-center space-x-1 text-gray-700 cursor-pointer hover:text-green-600 transition">
            <MapPin className="w-5 h-5" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-sm font-medium"
            >
              <option>New Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </div>
        </div>

        {/* Search Bar (Centered on larger screens) */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for groceries, fruits, and more..."
              className="w-full border rounded-full px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Right Section - User + Cart + Menu */}
        <div className="flex items-center space-x-4">
          {/* User */}
          <button
            onClick={() => setShowLogin(true)}
            className="flex items-center space-x-1 hover:text-green-600 transition"
          >
            <User className="w-6 h-6" />
          </button>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-green-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search groceries..."
            className="w-full border rounded-full px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 px-4 py-3 space-y-2">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-green-600 transition"
            >
              {item}
            </Link>
          ))}
        </nav>
      )}

      {/* Login Popup */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center relative">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-green-700">
              Welcome Back 👋
            </h2>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded-md px-3 py-2 mb-3 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-3 py-2 mb-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
            />
            <button className="w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition">
              Login
            </button>
            <p className="mt-3 text-sm text-gray-500">
              Don’t have an account?{" "}
              <span className="text-green-600 hover:underline cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
