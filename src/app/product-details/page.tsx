"use client";
import React from "react";
import { useRouter } from "next/navigation"; // ✅ correct for App Router

const ProductDetails = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5957/5957258.png"
          alt="Under Construction"
          className="mx-auto w-32 h-32 mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Page Under Construction
        </h1>
        <p className="text-gray-600 mb-6">
          This product page is still being built. We're not accepting any orders
          for now.
        </p>
        <button
          onClick={() => router.back()} // ✅ correct for App Router
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-md transition duration-300 cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
