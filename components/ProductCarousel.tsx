"use client";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
    title: string;
    products: {
        id: number;
        name: string;
        image: string;
        discount?: number;
        attribute: string;
    }[];
    autoScroll?: boolean;
    scrollInterval?: number; // milliseconds
}

export default function ProductCarousel({
    title,
    products,
    autoScroll = true,
    scrollInterval = 2500,
}: ProductCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 240; // card width + margin
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // Auto-scroll effect
    useEffect(() => {
        if (!autoScroll) return;

        const interval = setInterval(() => {
            if (!isHovered) scroll("right");
        }, scrollInterval);

        return () => clearInterval(interval);
    }, [autoScroll, isHovered, scrollInterval]);

    return (
        <div
            className="relative my-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Title + Arrows */}
            <div className="flex justify-between items-center mb-3 px-2">
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="bg-gray-100 hover:bg-gray-200 rounded-full p-1 shadow"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="bg-gray-100 hover:bg-gray-200 rounded-full p-1 shadow"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Scrollable Row */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-3 scroll-smooth scrollbar-hide px-2"
            >
                {products.map((product) => (
                    <div key={product.id} className="min-w-[200px]">
                        <ProductCard
                            name={product.name}
                            image={product.image}
                            discount={product.discount}
                            attribute={product.attribute}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
