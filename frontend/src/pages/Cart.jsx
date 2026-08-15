import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link to="/menu" className="p-2 hover:bg-gray-200 rounded-full transition">
            <ArrowLeft size={22} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Your Cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
              <div className="w-24 h-24 bg-orange-100 rounded-xl flex items-center justify-center text-4xl shrink-0">
                🍔
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">Classic Cheeseburger</h3>
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">Beef patty, cheese, lettuce, tomato</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                    <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white transition">
                      <Minus size={14} />
                    </button>
                    <span className="font-medium w-6 text-center">2</span>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white transition">
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-bold text-orange-600">$12.00</span>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
              <div className="w-24 h-24 bg-orange-100 rounded-xl flex items-center justify-center text-4xl shrink-0">
                🍕
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">Pepperoni Pizza</h3>
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">Large • Extra cheese</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                    <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white transition">
                      <Minus size={14} />
                    </button>
                    <span className="font-medium w-6 text-center">1</span>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white transition">
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-bold text-orange-600">$15.50</span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
              <div className="w-24 h-24 bg-orange-100 rounded-xl flex items-center justify-center text-4xl shrink-0">
                🍟
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">Crispy Fries</h3>
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <Trash2 size={18} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">Large size</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                    <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white transition">
                      <Minus size={14} />
                    </button>
                    <span className="font-medium w-6 text-center">1</span>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white transition">
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-bold text-orange-600">$4.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">$32.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$2.80</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-orange-600 text-lg">$37.30</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="mt-6 w-full block text-center py-3.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition shadow-lg shadow-orange-200"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}