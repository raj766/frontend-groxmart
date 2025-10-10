"use client";
import { useRef, useState } from "react";

interface ImageZoomProps {
  src: string;
  alt: string;
  zoomScale?: number; // default 2x
}

export default function ImageZoom({ src, alt, zoomScale = 2 }: ImageZoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden rounded-xl cursor-zoom-in border border-gray-100"
      style={{
        backgroundImage: isZoomed ? `url(${src})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: backgroundPosition,
        backgroundSize: `${zoomScale * 100}%`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-[400px] object-contain transition-all duration-300 ${
          isZoomed ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
