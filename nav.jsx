import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white p-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://i.imgur.com/LpAzuKA.png"
              alt="Amazon Logo"
              className="h-8"
            />
            <div className="text-xs">
              <p className="text-gray-300">Delivering to Cairo, Egypt</p>
              <p className="font-bold">Update location</p>
            </div>
          </div>

          <div className="flex-grow mx-6 max-w-md">
            <div className="flex items-center bg-white rounded-md overflow-hidden">
              <select className="bg-gray-200 text-black px-2 py-2 text-xs rounded-l-md">
                <option>All</option>
                <option>Electronics</option>
                <option>Fashion</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon"
                className="w-full px-2 py-2 text-black text-sm outline-none"
              />
              <button className="bg-yellow-500 px-3 py-2 flex items-center justify-center">
                🔍
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs hover:underline">
              <p className="text-gray-300">Hello, Sign in</p>
              <p className="font-bold">Account & Lists</p>
            </a>
            <a href="#" className="text-xs hover:underline">
              <p className="text-gray-300">Returns</p>
              <p className="font-bold">& Orders</p>
            </a>
            <a href="#" className="flex items-center space-x-1">
              🛒 <span className="font-bold">Cart</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
