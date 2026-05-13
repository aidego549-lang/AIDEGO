"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import BookingForm from "@/components/booking/BookingForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Dynamically import Map to avoid SSR issues with Leaflet
const InteractiveMap = dynamic(() => import("@/components/booking/InteractiveMap"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-surface animate-pulse flex items-center justify-center text-text-muted font-bold">Loading Map...</div>
});

export default function BookPage() {
  return (
    <main className="h-screen w-full overflow-hidden bg-white flex flex-col md:flex-row pt-24">
      {/* Left Sidebar: Booking Form */}
      <div className="w-full md:w-[450px] lg:w-[500px] h-full overflow-y-auto bg-white border-r border-border/50 z-20 relative shadow-2xl md:shadow-none">
        <div className="p-8 lg:p-10">
          <ScrollReveal>
            <div className="mb-10">
              <h1 className="text-3xl font-heading font-bold tracking-tight text-text mb-2">Request a ride</h1>
              <p className="text-text-muted font-medium text-sm leading-relaxed">
                Professional assisted transportation tailored to your specific care needs.
              </p>
            </div>
            
            <BookingForm isSidebar={true} />
          </ScrollReveal>

          {/* Additional Info Cards */}
          <div className="mt-12 space-y-6">
            <div className="p-6 rounded-3xl bg-surface border border-border/50">
              <h3 className="text-lg font-heading font-bold mb-4 tracking-tight">The Aide Advantage</h3>
              <ul className="space-y-4">
                {[
                  { title: "Vetted Drivers", desc: "Background-checked professionals." },
                  { title: "Trained Aides", desc: "Expert care for your journey." }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-text text-xs mb-0.5">{item.title}</h4>
                      <p className="text-[10px] text-text-muted font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content: Interactive Map */}
      <div className="flex-1 h-[50vh] md:h-full relative z-10">
        <InteractiveMap />
      </div>
    </main>
  );
}
