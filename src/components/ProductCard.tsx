"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  name: string;
  actualPrice: number;
  discountPrice: number;
  image: string;
  tag?: string;
  description: string;
}

const ProductCard = ({
  name,
  actualPrice,
  discountPrice,
  image,
  tag,
  description,
}: ProductCardProps) => {
  const discountPercent = Math.round(
    ((actualPrice - discountPrice) / actualPrice) * 100
  );

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product-details`); // Navigate to product details
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-md transition duration-200 overflow-hidden max-w-sm mx-auto cursor-pointer"
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-32 md:h-48 object-cover"
        />
        {tag && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-xs text-black px-2 py-1 rounded font-semibold">
            {tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>

        <div className="mb-4">
          {/* OFF badge above prices */}
          <p className="text-sm text-red-500 font-semibold mb-1">
            {discountPercent}% OFF
          </p>

          {/* Price Row: Discount + Actual */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500 line-through">₹{actualPrice}</p>
            <p className="text-lg font-bold text-green-600">₹{discountPrice}</p>
          </div>
        </div>

        {/* <div className="flex gap-2">
          <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
            Add to Cart
          </button>
          <button className="flex-1 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm">
            Buy Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
