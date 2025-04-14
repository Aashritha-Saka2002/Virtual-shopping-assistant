import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="text-2xl font-bold">ShopEase</div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Shop</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
        <div className="flex space-x-4">
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Discover the New Collection</h1>
          <p className="text-gray-600">Fresh styles, exclusive pieces, and the best deals in fashion.</p>
          <Button className="px-6 py-3 text-lg">Shop Now</Button>
        </div>
        <img
          src="https://via.placeholder.com/500x400"
          alt="Hero product"
          className="mt-6 md:mt-0 md:ml-12 rounded-lg shadow-lg"
        />
      </section>

      {/* Categories Section */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Men", "Women", "Accessories"].map((category) => (
            <div key={category} className="bg-white rounded-xl shadow p-4 text-center">
              <img src="https://via.placeholder.com/300x200" alt={category} className="rounded mb-4" />
              <h3 className="text-lg font-medium">{category}</h3>
              <Button className="mt-2">Explore</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-blue-600 text-white text-center p-8 my-8 rounded-xl mx-4">
        <h2 className="text-3xl font-bold mb-2">Spring Sale - Up to 50% Off!</h2>
        <p>Limited time offer. Grab your favorites now.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 ShopEasy. All rights reserved.</p>
        <div className="mt-2 space-x-4 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  );
}
