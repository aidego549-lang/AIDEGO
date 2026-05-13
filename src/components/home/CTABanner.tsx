"use client";

import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const CTABanner = () => {
  return (
    <Section bg="white" className="pt-16 lg:pt-24 pb-24 lg:pb-40">
      <Container>
        <ScrollReveal>
          <div className="relative bg-surface rounded-[4rem] overflow-hidden shadow-2xl shadow-black/[0.03] border border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Image Side - Left */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image 
                  src="/images/IMG_002.jpg" 
                  alt="AideGo care journey" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                
                {/* Premium "Experience" Badge */}
                <div className="absolute bottom-8 left-8 backdrop-blur-2xl bg-white/10 p-5 rounded-[2rem] border border-white/20 shadow-2xl hidden md:flex items-center gap-4 group/badge transition-all hover:bg-white/20">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                   </div>
                   <div className="text-left pr-4">
                      <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-white/50 mb-1">Service Excellence</p>
                      <p className="text-sm font-bold text-white tracking-tight leading-tight">Patient-First <br /> Mobility</p>
                   </div>
                </div>
              </div>

              {/* Content Side - Right */}
              <div className="p-12 lg:p-24 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-8">
                   <span className="w-12 h-[1px] bg-primary" />
                   <span className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-primary">Experience AideGo</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-6 tracking-tighter leading-[0.95]">
                  Your journey <br /> 
                  starts with <span className="text-primary italic">care.</span>
                </h2>
                
                <p className="text-base md:text-lg text-text-muted mb-10 leading-relaxed font-normal max-w-lg">
                  Safe, dignified, and patient-first transportation across Nigeria.
                </p>
                
                <div className="flex flex-row items-center gap-4 md:gap-5 mb-10 max-w-sm md:max-w-md">
                  <Link 
                    href="/book" 
                    className="flex-1 group relative inline-flex h-14 items-center justify-center rounded-2xl bg-primary px-6 md:px-8 text-[0.8rem] md:text-sm font-bold text-white transition-all hover:bg-text hover:shadow-2xl active:scale-95 whitespace-nowrap"
                  >
                    Book Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform flex-shrink-0">
                       <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="flex-1 group relative inline-flex h-14 items-center justify-center rounded-2xl border border-border px-6 md:px-8 text-[0.8rem] md:text-sm font-bold text-text transition-all hover:bg-primary hover:text-white hover:border-primary hover:shadow-2xl active:scale-95 whitespace-nowrap"
                  >
                    Get in touch
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-2 md:ml-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform flex-shrink-0">
                       <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Link>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                   <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-surface bg-surface overflow-hidden relative">
                           <Image 
                             src={`https://i.pravatar.cc/100?u=${i + 50}`} 
                             alt="User" 
                             fill
                             className="object-cover"
                           />
                        </div>
                      ))}
                   </div>
                   <p className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest">
                      <span className="text-primary font-black">5,000+</span> Families Trust AideGo
                   </p>
                </div>
              </div>
              
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default CTABanner;
