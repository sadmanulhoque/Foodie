import { Link } from "react-router-dom";
import { Plus, Star } from "lucide-react";
import { formatTitle } from "../../utils/formatTitle";

export default function PopularDishes({title = "Dishes"}) {
  const {firstPart, lastWord} = formatTitle(title);
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {firstPart} <span className="text-orange-500">{lastWord}</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            Our customers' favorite items this week
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Dish 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
                alt="Classic Cheeseburger"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                Popular
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <span className="text-xs text-gray-400 ml-1">(128)</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Classic Cheeseburger</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Juicy beef patty, melted cheese, fresh lettuce & tomato
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">$8.99</span>
                <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80"
                alt="Pepperoni Pizza"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="text-gray-300" />
                <span className="text-xs text-gray-400 ml-1">(96)</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Pepperoni Pizza</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Crispy crust, rich tomato sauce, lots of pepperoni
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">$14.50</span>
                <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Dish 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80"
                alt="Crispy Fried Chicken"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                Spicy
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <span className="text-xs text-gray-400 ml-1">(84)</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Crispy Fried Chicken</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Golden crispy chicken with special spicy seasoning
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">$11.99</span>
                <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Dish 4 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80"
                alt="Loaded Fries"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="text-gray-300" />
                <span className="text-xs text-gray-400 ml-1">(67)</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Loaded Fries</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Crispy fries topped with cheese, bacon & sauce
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">$6.50</span>
                <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Dish 5 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80"
                alt="Double Smash Burger"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <span className="text-xs text-gray-400 ml-1">(112)</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Double Smash Burger</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Two smash patties, cheddar, pickles & special sauce
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">$12.99</span>
                <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Dish 6 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80"
                alt="Margherita Pizza"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="text-gray-300" />
                <span className="text-xs text-gray-400 ml-1">(73)</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Margherita Pizza</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Fresh mozzarella, basil, and tomato sauce
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">$13.00</span>
                <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Dish 7 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80"
                alt="Chocolate Donuts"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <span className="text-xs text-gray-400 ml-1">(55)</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Chocolate Donuts</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Soft donuts with rich chocolate glaze
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">$4.99</span>
                <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Dish 8 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80"
                alt="Cold Soft Drink"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="fill-orange-400 text-orange-400" />
                <Star size={14} className="text-gray-300" />
                <span className="text-xs text-gray-400 ml-1">(41)</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Cold Soft Drink</h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Chilled soft drinks – Coke, Sprite, Fanta
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-orange-600">$2.50</span>
                <button className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                  <Plus size={16} />
                  Add
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}