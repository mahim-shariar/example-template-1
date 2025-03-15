import React from "react";
import { Card, CardFooter } from "@heroui/react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Social media icons

const Footer = () => {
  return (
    <div className=" fixed bottom-0 w-full bg-gradient-to-b from-[#f9f6f1] to-[#db1215] rounded-2xl">
      <Card
        isFooterBlurred
        className="w-full bg-white/40 backdrop-blur-xl border-t border-zinc-100/50 z-50"
      >
        <CardFooter className="flex flex-col w-full px-12 py-8">
          {/* Top Section - Company Name & Links */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
            {/* Left - Company Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-black">Company Name</h2>
              <p className="text-sm text-black/70">Your trusted brand for quality.</p>
            </div>

            {/* Right - Navigation Links */}
            <div className="flex space-x-6 text-black text-sm mt-4 md:mt-0">
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Products</a>
              <a href="#" className="hover:underline">Message</a>
            </div>
          </div>

          {/* Bottom Section - Social Media & Copyright */}
          <div className="border-t border-zinc-100/50 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between w-full">
            {/* Left - Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-gray-700"><Facebook size={20} /></a>
              <a href="#" className="text-black hover:text-gray-700"><Twitter size={20} /></a>
              <a href="#" className="text-black hover:text-gray-700"><Instagram size={20} /></a>
            </div>

            {/* Right - Copyright */}
            <p className="text-sm text-black/70 text-center md:text-right mt-4 md:mt-0">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Footer;
