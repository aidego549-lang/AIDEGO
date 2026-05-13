"use client";

import React from "react";
import { Container, Section } from "@/components/ui/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const WhoItsFor = () => {
  const needs = [
    {
      title: "Senior Citizens",
      description: "Dedicated assistance for older adults, ensuring safety and comfort from doorstep to destination.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
      glow: "bg-blue-400",
    },
    {
      title: "Visual Impairment",
      description: "Trained human aides to provide guided navigation and specialized support for visually impaired riders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      glow: "bg-purple-400",
    },
    {
      title: "Mobility Challenges",
      description: "Accessible vehicles and aides ready to assist with boarding and specialized mobility equipment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.57a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM17.25 17.25H21m-3.75 0V15m0 2.25v2.25m-3.75 0H10.5M10.5 21H8.25m0 0v-2.25m0 2.25H6m11.25-13.5v3.75" />
        </svg>
      ),
      glow: "bg-emerald-400",
    },
    {
      title: "Recovery Support",
      description: "Safe and calm transportation for individuals recovering from surgery or medical procedures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
        </svg>
      ),
      glow: "bg-amber-400",
    },
    {
      title: "Maternal Care",
      description: "Gentle and patient transport for expectant and new mothers for prenatal and postnatal checkups.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      ),
      glow: "bg-rose-400",
    },
    {
      title: "Routine Visits",
      description: "Consistent and reliable transport for recurring medical appointments like dialysis or therapy sessions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      glow: "bg-indigo-400",
    },
  ];

  return (
    <Section bg="white" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[120px] -z-10" />

      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 text-primary text-[0.7rem] font-bold uppercase tracking-widest mb-6">
               Patient-First Solutions
             </div>
             <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-6 tracking-tighter">
               Who we <span className="text-primary italic">serve.</span>
             </h2>
             <p className="text-lg md:text-xl text-text-muted leading-relaxed font-normal">
               Tailored assisted transportation for those who need extra patience and care.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {needs.map((need, i) => (
              <div 
                key={i} 
                className="group relative h-full"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 ${need.glow} rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition duration-700 group-hover:duration-200`} />
                
                <div className="relative h-full bg-white border border-border/60 rounded-[2rem] p-10 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-black/[0.03] hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center text-primary mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    {need.icon}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-text tracking-tight group-hover:text-primary transition-colors">
                    {need.title}
                  </h3>
                  
                  <p className="text-text-muted leading-relaxed font-medium mb-10 flex-grow text-lg">
                    {need.description}
                  </p>

                  <div className="pt-6 border-t border-border/40 mt-auto">
                    <Link 
                      href="/book" 
                      className="group/link inline-flex items-center gap-3 text-sm font-bold text-text hover:text-primary transition-all"
                    >
                      <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default WhoItsFor;
