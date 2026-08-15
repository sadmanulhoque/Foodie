import { Link } from "react-router-dom"; // or next/link
import { ShoppingCart, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🍔</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Burger<span className="text-orange-500">King</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition">
              Home
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-orange-500 font-medium transition">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium transition">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition">
              Contact
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-orange-500 transition"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            <Link
              to="/login"
              className="hidden sm:inline-block px-4 py-2 text-sm font-medium text-orange-600 border border-orange-500 rounded-full hover:bg-orange-50 transition"
            >
              Login
            </Link>

            {/* Mobile menu button (just visual) */}
            <button className="md:hidden p-2 text-gray-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}