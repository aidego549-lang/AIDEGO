"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import FAQAccordion from "@/components/how-it-works/FAQAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const riderSteps = [
  {
    id: "01",
    title: "Smart Booking",
    description: "Enter your destination and select your specialized vehicle. Instantly pair with a fully vetted driver and medical aide for personalized care.",
    image: "/images/HIW_02.jpg",
    tag: "Seamless Start"
  },
  {
    id: "02",
    title: "Door-to-Door Care",
    description: "Your professional team arrives at your doorstep to assist with boarding, seating, and ensuring a safe, comfortable journey from start to finish.",
    image: "/images/IMG011.jpg",
    tag: "Patient Support"
  },
  {
    id: "03",
    title: "Secure Arrival",
    description: "Enjoy live tracking and hands-on assistance until you are safely settled inside your destination, giving you and your family total peace of mind.",
    image: "/images/Patient_kk.jpg",
    tag: "Safe Completion"
  },
];

const aideSteps = [
  {
    id: "01",
    title: "Vetting & Training",
    description: "Submit your credentials for rigorous verification and graduate from our proprietary sensitivity and patient-handling program.",
    image: "/images/HIW_04.jpg",
    tag: "Elite Vetting"
  },
  {
    id: "02",
    title: "Professional Support",
    description: "Accept specialized ride requests through the app and provide compassionate, hands-on assistance that makes a real difference in mobility.",
    image: "/images/HIW_05.jpg",
    tag: "Meaningful Impact"
  },
  {
    id: "03",
    title: "Weekly Rewards",
    description: "Enjoy transparent, high-tier weekly payouts for your expertise while growing your career within the most trusted care network in Nigeria.",
    image: "/images/HIW_06.jpg",
    tag: "Earn & Grow"
  },
];

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<"rider" | "aide">("rider");

  const activeSteps = activeTab === "rider" ? riderSteps : aideSteps;

  return (
    <main className="bg-surface min-h-screen selection:bg-primary/20 selection:text-primary">
      {/* Hero Section */}
      <section className="relative h-[92vh] min-h-[700px] flex items-end justify-center overflow-hidden pb-12 lg:pb-20">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/HIW_01.jpg"
            alt="AideGo Care Journey"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>
        
        <Container className="relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="fade-in text-2xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight mb-4 tracking-tight text-white md:whitespace-nowrap">
                Simplicity in every <span className="text-primary italic">step.</span>
              </h1>
              <p className="fade-in text-lg md:text-xl text-white max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                Whether you're arranging a ride for a loved one or joining our team as a caregiver, we make the process simple and easy.
              </p>
            </ScrollReveal>

            {/* Interactive Toggle (Glassmorphic) */}
            <ScrollReveal delay={0.2}>
              <div className="inline-grid grid-cols-2 p-1.5 bg-white/10 border border-white/20 backdrop-blur-xl rounded-full shadow-2xl relative">
                <button
                  onClick={() => setActiveTab("rider")}
                  className={`relative z-10 px-4 sm:px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${
                    activeTab === "rider" ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  Passenger Journey
                </button>
                <button
                  onClick={() => setActiveTab("aide")}
                  className={`relative z-10 px-4 sm:px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${
                    activeTab === "aide" ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  Caregiver Journey
                </button>
                
                {/* Toggle Pill Background */}
                <div 
                  className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-primary rounded-full transition-transform duration-500 ease-out shadow-lg"
                  style={{ transform: activeTab === "rider" ? "translateX(0)" : "translateX(100%)" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Modern Steps Grid */}
      <Section className="pt-24 pb-12 lg:pt-40 lg:pb-20 bg-surface">
        <Container>
          <div className="text-center mb-20 lg:mb-24">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-xs mb-8 tracking-widest uppercase">
                The Roadmap
             </div>
             <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-6 tracking-tighter leading-tight">
                Designed for <span className="text-primary italic">excellence.</span>
             </h2>
          </div>

          <ScrollReveal>
            <div className="relative">
              {/* Connection Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-border/60 -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 relative z-10">
              {activeSteps.map((step) => (
                <div 
                  key={step.id} 
                  className="group relative bg-white rounded-[3rem] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 border border-border/50 flex flex-col h-full"
                >
                  {/* Step Number Badge (Floating) */}
                  <div className="absolute top-6 right-6 z-20 px-4 py-1.5 bg-primary text-white text-[0.6rem] font-black uppercase tracking-widest rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    Step {step.id}
                  </div>

                  {/* Image Frame - Clean panoramic height */}
                  <div className="relative aspect-[1.6/1] overflow-hidden shadow-inner">
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  {/* Content - Compact Padded area */}
                  <div className="p-6 lg:p-8 text-center flex-grow flex flex-col justify-center">
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary mb-2 block">
                      {step.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-text mb-4 tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual Connector Dot (Desktop) */}
                  <div className="hidden lg:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-border group-hover:bg-primary group-hover:scale-150 transition-all duration-300 z-30" />
                </div>
              ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="pt-12 pb-24 lg:pt-20 lg:pb-40 bg-white overflow-hidden">
        <Container>
          <div className="relative">
            {/* Background Decorative Elements */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
              <div className="lg:w-1/3">
                 <div className="sticky top-32">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-[0.65rem] mb-8 tracking-[0.2em] uppercase">
                       Help & Support
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-8 tracking-tighter leading-[1.1]">
                      Got questions? <br /> <span className="text-primary italic">We have answers.</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed font-normal mb-12 max-w-sm">
                      Everything you need to know about the AideGo platform. Can't find what you're looking for?
                    </p>

                    <div className="space-y-4">
                       <Link 
                          href="/contact" 
                          className="group flex items-center gap-5 p-6 rounded-3xl bg-surface border border-border/50 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] hover:border-primary/20"
                       >
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                             </svg>
                          </div>
                          <div>
                             <h4 className="font-bold text-text text-base mb-0.5">Email Support</h4>
                             <p className="text-xs text-text-muted font-medium">Get a response within 24h</p>
                          </div>
                       </Link>

                       <Link 
                          href="https://wa.me/2340000000000" 
                          target="_blank"
                          className="group flex items-center gap-5 p-6 rounded-3xl bg-surface border border-border/50 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] hover:border-primary/20"
                       >
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                             </svg>
                          </div>
                          <div>
                             <h4 className="font-bold text-text text-base mb-0.5">WhatsApp Chat</h4>
                             <p className="text-xs text-text-muted font-medium">Connect with us instantly</p>
                          </div>
                       </Link>
                    </div>
                 </div>
              </div>
              <div className="lg:w-2/3">
                <ScrollReveal>
                  <FAQAccordion />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA - Split Design */}
      <Section className="pb-32 lg:pb-48 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Passenger Journey Card */}
            <ScrollReveal>
               <div className="group relative bg-surface rounded-[3.5rem] p-10 lg:p-16 h-full border border-border/50 transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 overflow-hidden flex flex-col justify-between">
                  <div className="relative z-10">
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[0.65rem] mb-8 tracking-[0.2em] uppercase">
                        Ride with care
                     </div>
                     <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-6 tracking-tighter leading-tight">
                       Start your <br /> <span className="text-primary italic">safe journey.</span>
                     </h2>
                     <p className="text-lg text-text-muted mb-10 max-w-sm leading-relaxed font-normal">
                       Book a professional ride with dedicated care for yourself or a loved one in Nigeria.
                     </p>
                  </div>
                  
                  <div className="relative z-10">
                     <Link 
                       href="/book"
                       className="inline-flex items-center gap-3 h-16 px-10 rounded-2xl bg-primary text-white font-bold text-sm transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-95 group/btn"
                     >
                       Book a ride
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                       </svg>
                     </Link>
                  </div>

                  {/* Decorative Gradient Blob */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-1000" />
               </div>
            </ScrollReveal>

            {/* Caregiver Journey Card */}
            <ScrollReveal delay={0.2}>
               <div className="group relative bg-text rounded-[3.5rem] p-10 lg:p-16 h-full transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-2 overflow-hidden flex flex-col justify-between">
                  <div className="relative z-10">
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 font-bold text-[0.65rem] mb-8 tracking-[0.2em] uppercase">
                        Join the mission
                     </div>
                     <h2 className="text-4xl md:text-5xl font-heading font-semibold text-white mb-6 tracking-tighter leading-tight">
                       Join our <br /> <span className="text-primary italic">expert team.</span>
                     </h2>
                     <p className="text-lg text-white/60 mb-10 max-w-sm leading-relaxed font-normal">
                       Build a meaningful career providing essential mobility assistance to those who need it.
                     </p>
                  </div>

                  <div className="relative z-10">
                     <Link 
                       href="/aides"
                       className="inline-flex items-center gap-3 h-16 px-10 rounded-2xl bg-white text-text font-bold text-sm transition-all hover:bg-primary hover:text-white active:scale-95 group/btn"
                     >
                       Become an Aide
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                       </svg>
                     </Link>
                  </div>

                  {/* Decorative Gradient Blob */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-1000" />
               </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
