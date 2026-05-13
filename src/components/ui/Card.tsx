import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "small" | "normal" | "large";
}

const Card = ({ children, className = "", padding = "normal" }: CardProps) => {
  const paddings = {
    none: "",
    small: "p-4",
    normal: "p-6 md:p-8",
    large: "p-8 md:p-12",
  };

  return (
    <div className={`bg-white rounded-xl border border-border hover:shadow-sm transition-all ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
