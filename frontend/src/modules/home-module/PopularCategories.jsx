import { Link } from "react-router-dom";
import { formatTitle } from "../../utils/formatTitle";

export default function PopularCategories({title = "Explore Categories"}) {
    const {firstPart, lastWord} = formatTitle(title);
    return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {firstPart}{" "} <span className="text-orange-500">{lastWord}</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            Explore our most loved food categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          
          {/* Burgers */}
          <Link
            to="/menu"
            className="group flex flex-col items-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-100 shadow-md group-hover:border-orange-400 group-hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
                alt="Burgers"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition">
              Burgers
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">12 items</p>
          </Link>

          {/* Pizza */}
          <Link
            to="/menu"
            className="group flex flex-col items-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-100 shadow-md group-hover:border-orange-400 group-hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80"
                alt="Pizza"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition">
              Pizza
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">8 items</p>
          </Link>

          {/* Fries */}
          <Link
            to="/menu"
            className="group flex flex-col items-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-100 shadow-md group-hover:border-orange-400 group-hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80"
                alt="Fries"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition">
              Fries
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">6 items</p>
          </Link>

          {/* Drinks */}
          <Link
            to="/menu"
            className="group flex flex-col items-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-100 shadow-md group-hover:border-orange-400 group-hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80"
                alt="Drinks"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition">
              Drinks
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">10 items</p>
          </Link>

          {/* Chicken */}
          <Link
            to="/menu"
            className="group flex flex-col items-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-100 shadow-md group-hover:border-orange-400 group-hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80"
                alt="Chicken"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition">
              Chicken
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">9 items</p>
          </Link>

          {/* Desserts */}
          <Link
            to="/menu"
            className="group flex flex-col items-center"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-100 shadow-md group-hover:border-orange-400 group-hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80"
                alt="Desserts"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900 group-hover:text-orange-500 transition">
              Desserts
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">7 items</p>
          </Link>

        </div>
      </div>
    </section>
  );
}