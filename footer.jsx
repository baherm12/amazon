import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <h3 className="font-bold mb-2">Get to Know Us</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Connect with Us</h3>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Make Money with Us</h3>
          <ul className="space-y-1">
            <li>Sell on Amazon</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-1">
            <li>Your Account</li>
            <li>Customer Service</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 border-t border-gray-700 pt-4">
        © 2025 Amazon - Unofficial Version
      </div>
    </footer>
  );
};

export default Footer;
