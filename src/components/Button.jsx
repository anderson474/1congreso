// src/components/Button.jsx
"use client";

import Link from "next/link";
import React from "react";

export default function Button({ 
  href = "#precios", 
  variant = "primary", 
  children, 
  className = "",
  disabled = false
}) {
  const baseClasses = "bg-gradient-to-r from-[#C22A8F] to-[#7A1485] inline-block text-white rounded-lg font-bold shadow-xl border-2 border-[#FF8AEF] shadow-[0_0_5px_#FF00C8,0_0_15px_#FF00C8,0_0_30px_#FF78E6,0_0_60px_#FFB4F0] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-[0_0_10px_#FF00C8,0_0_25px_#FF00C8,0_0_50px_#FF4EDB,0_0_90px_#FF9AF2] text-center";
  
  const variants = {
    primary: "bg-[#934292] text-xl md:text-3xl px-10 py-6",
    secondary: "bg-[#934292] text-base md:text-2xl px-6 py-4 mt-5 self-center"
  };

  if (disabled) {
    return (
      <button
        disabled
        className={`block w-full sm:inline-block text-center bg-gray-400 text-white text-xl md:text-3xl px-10 py-4 rounded-lg font-bold shadow-xl opacity-70 cursor-not-allowed ${className}`}
      >
        {children}
      </button>
    );
  }

  const variantClasses = variants[variant] || variants.primary;
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.replace(/\s+/g, ' ').trim();

  if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
}
