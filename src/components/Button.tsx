import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none";
  const variants = {
    primary: "bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-lg shadow-[#6366F1]/20",
    secondary: "bg-[#11131B] hover:bg-[#181B26] text-[#F8FAFC] border border-white/10",
    glass: "backdrop-blur-md bg-white/5 hover:bg-white/10 text-white border border-white/15"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}