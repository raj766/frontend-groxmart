import ProductCarousel from "@/components/ProductCarousel";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  const flashDeals = [
    { id: 1, name: "Amul Gold Full Cream Milk", image: "/images/amul-milk.avif", discount: 10, attribute: "500ml" },
    { id: 2, name: "Tata Salt (Vacuum Evaporated Iodised)", image: "/images/tata-salt.avif", discount: 15, attribute: "1kg" },
    { id: 3, name: "Fortune Premium Kachi Ghani Pure Mustard Oil", image: "/images/fortune-oil.avif", discount: 5, attribute: "1L" },
    { id: 4, name: "Colgate Strong Teeth Anticavity Toothpaste (150 g)", image: "/images/colgate.avif", discount: 12, attribute: "150g" },
    { id: 5, name: "Aashirvaad Organic Atta", image: "/images/ashirwad.avif", attribute: "5kg" },
    { id: 6, name: "Savlon Deep Clean Germ Protection Liquid Hand Wash Refill", image: "/images/handwash.avif", discount: 8, attribute: "200ml" },
    { id: 7, name: "Protein Chef Madras Mixture Namkeen High Protein Healthy Snacks", image: "/images/namkeen.avif", discount: 8, attribute: "200ml" },
  ];
  return (
     <section className="space-y-10">
      {/* Hero */}
      <div className="relative bg-green-100 rounded-2xl overflow-hidden">
        <div className="p-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-4">
            Fresh Groceries, Delivered Fast
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Shop your daily essentials with GroxMart — reliable delivery, best quality.
          </p>
          <Link
            href="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <ProductCarousel
          title="⚡ Flash Deals"
          products={flashDeals}
          autoScroll={true}
          scrollInterval={2500}
        />
      {/* Categories */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["Fruits", "Vegetables", "Dairy", "Snacks"].map((cat) => (
            <div
              key={cat}
              className="bg-white shadow-sm hover:shadow-md p-6 rounded-xl text-center cursor-pointer transition"
            >
              <p className="font-medium text-gray-800">{cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white shadow-sm hover:shadow-md rounded-xl overflow-hidden transition"
            >
              <Image
                src={`/images/tata-salt.avif`}
                alt={`Product ${item}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-gray-800">Product {item}</h3>
                <p className="text-green-600 font-semibold mt-1">₹{item * 50}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
