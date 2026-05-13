"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Layout";

const Hero = () => {
  return (
    <section className="relative h-[92vh] flex items-end justify-center overflow-hidden pb-20">
      {/* Full-Width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_H1.jpg"
          alt="Medical aide consulting with patient"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Cinematic Gradient Overlay - Subtle darkening at the bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Centered Content Container */}
      <Container className="relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Headline */}
          <h1 className="fade-in text-2xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight mb-4 tracking-tight text-white md:whitespace-nowrap">
            Safe rides with extra care.
          </h1>

          {/* Supporting Paragraph */}
          <p className="fade-in text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Door-to-door transport, personal support, and medical aide for elderly and special-needs passengers across Nigeria.
          </p>

          {/* Centered Buttons */}
          <div className="fade-in flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/book" 
              className="w-full sm:w-52 px-8 py-3.5 bg-white text-text rounded-full font-bold text-base shadow-xl hover:bg-white/90 hover:-translate-y-0.5 transition-all text-center"
            >
              Book a Ride
            </Link>
            <Link 
              href="/aides" 
              className="w-full sm:w-52 px-8 py-3.5 bg-transparent border-2 border-white/50 text-white rounded-full font-bold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all text-center"
            >
              Become an Aide
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
