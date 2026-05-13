"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock state for demonstration

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How it works", href: "/how-it-works" },
    { name: "About us", href: "/about" },
    { name: "Become an Aide", href: "/aides" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`pointer-events-auto transition-all duration-500 rounded-[2rem] border border-white/40 backdrop-blur-xl shadow-2xl ${
          isScrolled 
            ? "bg-white/80 py-3 px-6 w-full max-w-5xl" 
            : "bg-white/90 py-4 px-10 w-full max-w-6xl"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 focus-ring group">
            <span className="text-2xl font-heading font-semibold text-primary tracking-tighter group-hover:scale-105 transition-transform">AideGo</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all ${
                  pathname === link.href 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-text-muted hover:text-text hover:bg-white/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/book"
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-text px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-primary hover:shadow-lg active:scale-95"
                >
                  Book a Ride
                </Link>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden hover:border-primary transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                    JD
                  </div>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="hidden sm:inline-flex items-center justify-center rounded-full bg-text px-8 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary hover:shadow-lg active:scale-95"
                >
                  Book a Ride
                </Link>
              </div>
            )}
            
            <button className="md:hidden w-10 h-10 flex items-center justify-center text-text bg-white rounded-full border border-border" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
