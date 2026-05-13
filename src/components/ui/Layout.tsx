import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`container-custom ${className}`}>
    {children}
  </div>
);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "surface" | "primary-light" | "warm";
}

export const Section = ({ children, className = "", id, bg = "white" }: SectionProps) => {
  const bgClasses = {
    white: "bg-white",
    surface: "bg-surface",
    "primary-light": "bg-primary-light",
    warm: "bg-[#FEF9F5]",
  };

  return (
    <section id={id} className={`section-padding ${bgClasses[bg]} ${className}`}>
      {children}
    </section>
  );
};
