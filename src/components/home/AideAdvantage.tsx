"use client";

import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Link from "next/link";

const AideAdvantage = () => {
  return (
    <Section bg="white" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-10%,#F8F9FA,transparent)]" />
      
      <Container className="relative z-10">
        <ScrollReveal>
          {/* Centered Header Narrative */}
          <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-xs mb-8 tracking-widest uppercase">
               The Aide Advantage
            </div>
            <h2 className="text-4xl md:text-7xl font-heading font-semibold text-text mb-8 tracking-tighter leading-tight">
              Moving with <span className="text-primary italic">care.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed font-normal max-w-2xl mx-auto mb-10">
              AideGo is more than a ride. We bridge the gap between transportation and care with <span className="text-text font-medium underline decoration-primary/30 decoration-4 underline-offset-8">trained human aides</span> who stay with you every step.
            </p>
            
            {/* Trust Indicator - Centered */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-surface overflow-hidden shadow-sm relative">
                    <Image 
                      src={`https://i.pravatar.cc/100?u=${i + 30}`} 
                      alt="User" 
                      fill
                      className="object-cover" 
                    />
                  </div>
                ))}
              </div>
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-primary">Trusted by 5,000+ Families</p>
            </div>
          </div>

          {/* Modern Balanced Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Feature 1: Safety */}
            <div className="lg:col-span-4 bg-surface rounded-[3rem] p-10 lg:p-12 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
               <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-12 group-hover:bg-primary group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
               </div>
               <div>
                  <h3 className="text-2xl font-heading font-semibold text-text mb-4 tracking-tight">Vetted Professionals</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-medium">Every driver and aide undergoes extensive background checks and sensitivity training.</p>
               </div>
            </div>

            {/* Central Masterpiece - Image */}
            <div className="lg:col-span-4 relative aspect-square lg:aspect-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-black/5 group">
              <Image
                src="/images/IMG011.jpg"
                alt="Assisted transportation service"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center w-full px-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[0.6rem] font-bold uppercase tracking-widest block mb-2">Door-to-Door</span>
                <h4 className="text-xl font-heading font-semibold text-white">Care that never stops</h4>
              </div>
            </div>

            {/* Feature 2: Support */}
            <div className="lg:col-span-4 bg-text rounded-[3rem] p-10 lg:p-12 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
               <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-12 group-hover:bg-primary transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 1.5-.545m-1.5-6.205L12.75 4.5m1.5 5.205-1.5.545m-1.5-6.205 1.5-.545m-1.5 6.205L6.75 7.364M6.75 7.364V21m0 0h4.5V3.545M6.75 7.364 12.75 4.5" />
                  </svg>
               </div>
               <div>
                  <h3 className="text-2xl font-heading font-semibold text-white mb-4 tracking-tight">Seamless Support</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-medium group-hover:text-white/80 transition-colors">We assist with everything from stairs to sign-in desks at your destination.</p>
               </div>
            </div>
          </div>

          {/* Centered Final CTA */}
          <div className="mt-12 text-center">
             <Link 
              href="/about" 
              className="inline-flex h-16 items-center justify-center rounded-full bg-text px-12 text-sm font-bold text-white transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary/20 active:scale-95"
             >
               Discover our mission
             </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default AideAdvantage;
