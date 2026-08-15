import { Link } from "react-router-dom";
import { CheckCircle, Home, ShoppingBag } from "lucide-react";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center">
          
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={48} className="text-green-500" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Order Successful!
          </h1>
          <p className="mt-2 text-gray-500">
            Thank you for your order. We’ve received it successfully.
          </p>

          {/* Order Info */}
          <div className="mt-8 bg-orange-50 rounded-2xl p-5 text-left space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Order ID</span>
              <span className="font-semibold text-gray-900">#BK-84921</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Order Date</span>
              <span className="font-semibold text-gray-900">15 Aug 2026, 05:12 PM</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Payment Method</span>
              <span className="font-semibold text-gray-900">Cash on Delivery</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Order Status</span>
              <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Confirmed
              </span>
            </div>
          </div>

          {/* Order Items Summary */}
          <div className="mt-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
            
            <div className="space-y-3">
              {/* Item 1 */}
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-lg">
                    🍔
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Classic Cheeseburger</p>
                    <p className="text-gray-400 text-xs">Qty: 2</p>
                  </div>
                </div>
                <span className="font-medium">$17.98</span>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-lg">
                    🍕
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Pepperoni Pizza</p>
                    <p className="text-gray-400 text-xs">Qty: 1</p>
                  </div>
                </div>
                <span className="font-medium">$14.50</span>
              </div>

              {/* Item 3 */}
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-lg">
                    🍟
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Loaded Fries</p>
                    <p className="text-gray-400 text-xs">Qty: 1</p>
                  </div>
                </div>
                <span className="font-medium">$6.50</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center">
              <span className="font-bold text-gray-900">Total Paid</span>
              <span className="font-bold text-orange-600 text-lg">$38.98</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition"
            >
              <Home size={18} />
              Back to Home
            </Link>
            <Link
              to="/menu"
              className="flex-1 flex items-center justify-center gap-2 py-3.5 border-2 border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition"
            >
              <ShoppingBag size={18} />
              Order More
            </Link>
          </div>
        </div>

        {/* Extra Note */}
        <p className="text-center text-sm text-gray-400 mt-6">
          You will receive an SMS confirmation shortly.
        </p>
      </div>
    </div>
  );
}