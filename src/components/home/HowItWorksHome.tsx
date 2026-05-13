"use client";

import React from "react";
import { Container, Section } from "@/components/ui/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";

const HowItWorksHome = () => {
  const steps = [
    {
      title: "Schedule Your Ride",
      description: "Book your trip in advance through our simple platform, specifying any special requirements.",
      number: "01",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      ),
    },
    {
      title: "Get Matched",
      description: "We pair you with a vetted driver and a trained human aide who understands your needs.",
      number: "02",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      ),
    },
    {
      title: "Travel with Dignity",
      description: "Our team assists you from your door to your destination, ensuring a safe and comfortable trip.",
      number: "03",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <Section bg="white" className="py-24 lg:py-32 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
            <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-6 tracking-tighter">
              Simple steps to <br className="hidden md:block" />
              <span className="text-primary italic">safe transportation.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              We&apos;ve streamlined the booking process to ensure you get the care and assistance you deserve without any stress.
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="group flex flex-col items-center text-center p-8 bg-white border border-border/50 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Step {step.number}
                  </div>

                  <div className="w-20 h-20 rounded-[1.5rem] bg-surface flex items-center justify-center text-primary mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/5">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-text tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-muted leading-relaxed font-medium">
                    {step.description}
                  </p>
                  
                  {/* Visual Connector Dot (Desktop) */}
                  <div className="hidden lg:block absolute -bottom-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-border group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
};

export default HowItWorksHome;
