"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-green-600">
          GroxMart
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/products" className="hover:text-green-600">Products</Link>
          <Link href="/about" className="hover:text-green-600">About</Link>
          <Link href="/contact" className="hover:text-green-600">Contact</Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <ShoppingCart className="w-6 h-6 text-green-600" />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 px-4 py-2 space-y-2">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-green-600"
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
