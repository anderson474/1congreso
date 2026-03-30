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
  const baseClasses = "inline-block text-white rounded-lg font-bold shadow-xl border border-pink-400 shadow-[0_0_20px_#934292] transform transition-all duration-300 ease-in-out hover:bg-white hover:text-[#934292] hover:scale-105 hover:shadow-2xl text-center";
  
  const variants = {
    primary: "bg-[#934292] text-xl md:text-3xl px-10 py-2",
    secondary: "bg-[#934292] text-base md:text-2xl px-6 py-2 mt-5 self-center"
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
