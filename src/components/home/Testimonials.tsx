"use client";

import React from "react";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Testimonials = () => {
  const reviews = [
    {
      name: "Mrs. Adaeze O.",
      role: "Elderly Passenger",
      quote: "The driver was so patient with me, and the aide helped me carry my groceries right to my door. I've never felt so looked after during a ride.",
      avatar: "https://i.pravatar.cc/100?u=adaeze",
    },
    {
      name: "Mr. Tunde B.",
      role: "Visually Impaired",
      quote: "As someone who is visually impaired, navigating Nigeria is tough. AideGo has changed everything for me. The aides are experts at guiding me safely.",
      avatar: "https://i.pravatar.cc/100?u=tunde",
    },
    {
      name: "Fatima K.",
      role: "Post-surgery Recovery",
      quote: "After my knee surgery, I was worried about getting to my follow-up appointments. AideGo's careful driving and assistance made it stress-free.",
      avatar: "https://i.pravatar.cc/100?u=fatima",
    },
  ];

  return (
    <Section bg="white" className="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <Container>
        <ScrollReveal>
          {/* Header Narrative */}
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-xs mb-8 tracking-widest uppercase">
               Human Stories
            </div>
            <h2 className="text-4xl md:text-7xl font-heading font-semibold text-text mb-8 tracking-tighter leading-tight">
              Stories of <span className="text-primary italic">care.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed font-normal">
              Real experiences from families across Nigeria who have regained their <span className="text-text font-medium">independence and dignity</span> with AideGo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div 
                key={i} 
                className="group relative bg-surface rounded-[2.5rem] p-10 lg:p-12 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-black/[0.03] hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Modern Quote Mark */}
                <div className="mb-10 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.5693 13 6.017 13H4.017V21H6.017Z" />
                  </svg>
                </div>

                <div className="flex-grow">
                  <p className="text-xl font-heading font-medium text-text mb-12 leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-8 border-t border-border/40 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
                    <Image 
                      src={review.avatar} 
                      alt={review.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-text tracking-tight">{review.name}</h4>
                    <p className="text-[0.6rem] font-bold text-primary uppercase tracking-widest">{review.role}</p>
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

export default Testimonials;
