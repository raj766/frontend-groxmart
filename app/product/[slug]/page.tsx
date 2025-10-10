"use client";

import { useState } from "react";
import { Home, ChevronRight, ShoppingCart, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductCarousel from "@/components/ProductCarousel";
import ImageZoom from "@/components/ImageZoom";

export default function ProductDetailsPage() {
  const product = {
    id: 1,
    name: "Amul Taza Milk",
    sku: "AM-MILK-500",
    mrp: 35,
    sellingPrice: 32,
    discount: 8,
    attribute: "500ml Pack",
    images: [
      "/images/tata-salt.avif",
      "/images/fortune-oil.avif",
      "/images/colgate.avif",
      "/images/amul-milk.avif",
    ],
    description:
      "Amul Taza is pure, fresh cow milk processed and packed hygienically. Rich in calcium, protein and essential nutrients, it’s ideal for your daily needs.",
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [qty, setQty] = useState(0);

  const similarProducts = [
    { id: 2, name: "Mother Dairy Milk", image: "/images/tata-salt.avif", discount: 5, attribute: "500ml" },
    { id: 3, name: "Amul Butter", image: "/images/tata-salt.avif", discount: 10, attribute: "100g" },
    { id: 4, name: "Britannia Cheese", image: "/images/tata-salt.avif", discount: 12, attribute: "200g" },
    { id: 5, name: "Nestle Milk", image: "/images/tata-salt.avif", discount: 7, attribute: "1L" },
    { id: 6, name: "Amul Gold Milk", image: "/images/tata-salt.avif", discount: 9, attribute: "1L" },
  ];

  const savings = product.mrp - product.sellingPrice;

  return (
    <main className="px-4 md:px-12 py-6 bg-gray-50">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <Home size={16} className="mr-1 text-gray-400" />
        <span className="cursor-pointer hover:text-green-600">Home</span>
        <ChevronRight size={14} />
        <span className="cursor-pointer hover:text-green-600">Dairy Products</span>
        <ChevronRight size={14} />
        <span className="text-gray-800 font-medium">{product.name}</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-sm">
        {/* Left: Images */}
        <div className="flex flex-col items-center">
          {/* <div className="border rounded-xl overflow-hidden w-full max-w-[400px]">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[400px] object-contain hover:scale-105 transition-transform"
            />
          </div> */}
          <div className="w-full max-w-[400px]">
            <ImageZoom src={selectedImage} alt={product.name} zoomScale={2.2} />
            </div>

          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className={`w-16 h-16 border rounded-md cursor-pointer object-contain p-1 hover:border-green-600 ${
                  selectedImage === img ? "border-green-600" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-1">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-3">SKU: {product.sku}</p>

            <div className="flex items-baseline gap-2 mb-2">
              <p className="text-xl font-bold text-green-600">₹{product.sellingPrice}</p>
              <p className="text-sm line-through text-gray-400">₹{product.mrp}</p>
              <p className="text-sm font-semibold text-red-500">Save ₹{savings}</p>
            </div>

            <p className="text-sm text-gray-600 mb-4">({product.discount}% OFF)</p>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-gray-600 font-medium">Unit:</span>
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                {product.attribute}
              </span>
            </div>

            {/* Add to Cart */}
            {qty === 0 ? (
              <button
                onClick={() => setQty(1)}
                className="bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-green-700 transition-all"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(qty - 1)}
                  className="bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-medium">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="bg-green-600 text-white rounded-full p-2 hover:bg-green-700"
                >
                  +
                </button>
              </div>
            )}
          </div>

          {/* Why Shop From GroxMart */}
          <div className="mt-8 border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Why shop from GroxMart?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✅ 100% Fresh & Quality Guaranteed Products</li>
              <li>🚚 Superfast Delivery — Get in 15 Minutes</li>
              <li>💰 Best Prices & Exclusive Offers Everyday</li>
              <li>🛡️ Easy Returns & Secure Payments</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Product Details</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
      </div>

      {/* Similar Products */}
      <div className="mt-10">
        <ProductCarousel title="Similar Products" products={similarProducts} autoScroll={true} />
      </div>
    </main>
  );
}
