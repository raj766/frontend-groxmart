"use client";
import { useState } from "react";
import { Heart, ShoppingCart, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  discount?: number;
  attribute: string;
}

export default function ProductCard({ name, image, discount, attribute }: ProductCardProps) {
  const [wishlist, setWishlist] = useState(false);
  const [qty, setQty] = useState(0);

  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          -{discount}%
        </div>
      )}

      {/* Wishlist Icon */}
      <button
        onClick={() => setWishlist(!wishlist)}
        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:scale-110 transition-transform"
      >
        <Heart
          className={`w-5 h-5 ${wishlist ? "fill-red-500 text-red-500" : "text-gray-500"}`}
        />
      </button>

      {/* Product Image */}
      <div className="flex justify-center items-center p-4">
      <Link href={`/product/1`} className="flex justify-center items-center p-4">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
       {/*  <img
          src={image}
          alt={name}
          className="h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-105"
        /> */}
      </div>

      {/* Product Info */}
      <div className="p-3 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-800 truncate">{name}</h3>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-500 text-xs font-medium">{attribute}</span>

          {/* Add to Cart / Quantity Controls */}
          {qty === 0 ? (
            <button
              onClick={() => setQty(1)}
              className="bg-green-600 text-white p-1.5 rounded-lg hover:bg-green-700 transition-all flex items-center"
            >
              <ShoppingCart size={16} />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty(qty - 1)}
                className="bg-gray-200 text-gray-700 rounded-full p-1 hover:bg-gray-300"
              >
                <Minus size={14} />
              </button>
              <span className="text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="bg-green-600 text-white rounded-full p-1 hover:bg-green-700"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
