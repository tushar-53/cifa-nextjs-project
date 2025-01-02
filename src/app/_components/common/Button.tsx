import React, { ReactNode } from "react";

interface ButtonProps {
  title: ReactNode;
  className?: string; // Accept custom className
}

export default function Button({ title, className }: ButtonProps) {
  return (
    <button
      className={`bg-primary_color text-white px-2 py-1 text-xs sm:text-sm rounded-lg w-auto hover:bg-transparent hover:border hover:border-primary_color hover:text-primary_color transition-all ease-in-out duration-300 ${
        className || ""
      }`}
    >
      {title}
    </button>
  );
}
