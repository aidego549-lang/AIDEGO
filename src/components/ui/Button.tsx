import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "whatsapp";
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({ variant = "primary", href, fullWidth, children, className = "", ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 focus-ring";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    ghost: "bg-transparent text-primary border border-primary hover:bg-primary-light",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#25D366]/90",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
