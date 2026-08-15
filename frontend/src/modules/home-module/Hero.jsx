import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
              🔥 Hot & Fresh Daily
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Delicious Burgers
              <span className="block text-orange-500">& Pizza Delivered</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              Order your favorite burgers, pizzas, fries and more. Fresh ingredients, fast delivery, and unbeatable taste.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition shadow-lg shadow-orange-200"
              >
                Order Now
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Right - Burger Image */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Soft glow behind image */}
              <div className="absolute inset-0 bg-orange-200 rounded-full blur-3xl opacity-50"></div>

              {/* Burger Image */}
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
                alt="Delicious Cheeseburger"
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}