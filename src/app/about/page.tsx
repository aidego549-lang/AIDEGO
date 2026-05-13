"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";

const values = [
  {
    id: "01",
    title: "Safe & Trusted",
    description: "Every driver and aide is thoroughly vetted and trained to keep you safe and comfortable on every ride.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Care & Respect",
    description: "We treat everyone with patience and dignity. We don't just provide transport; we care for the people we move.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Built for You",
    description: "Our app and vehicles are designed specifically for the elderly and those with special mobility needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075-5.925V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a.75.75 0 0 0-.288-1.235l-3.977-1.137a1.5 1.5 0 0 1-1.073-1.439V9.75" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[92vh] min-h-[700px] flex items-end justify-center overflow-hidden pb-12 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/AU_01.jpg"
            alt="The AideGo Vision"
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
              <h1 className="fade-in text-3xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight mb-4 tracking-tight text-white md:whitespace-nowrap">
                Movement is <span className="text-primary italic">a right.</span>
              </h1>
              <p className="fade-in text-lg md:text-xl text-white max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                We believe no one should be left behind. AideGo provides safe, assisted rides for the elderly, visually impaired, and people with special needs.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Narrative Section */}
      <Section className="pt-24 lg:pt-40 pb-12 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal className="h-full">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-full min-h-[400px] lg:min-h-full">
                <Image
                  src="/images/AU_02.jpg"
                  alt="Helping a patient"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-xs mb-8 tracking-widest uppercase">
                  Our Story
                </div>
                <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-8 tracking-tighter leading-tight">
                  Why we built <br /> <span className="text-primary italic">AideGo.</span>
                </h2>
                <div className="space-y-6 text-lg text-text-muted leading-relaxed font-normal">
                  <p>
                    In most cities, transportation is often a battle. For the elderly, the visually impaired, and those with medical conditions, this battle becomes an insurmountable barrier to life.
                  </p>
                  <p>
                    Over 29 million Nigerians live with a disability and more than 7 million are above the age of 60. Yet traditional ride-hailing services prioritize speed and volume, leaving behind the people who need a slower pace, a steady arm, and a specialized team.
                  </p>
                  <p>
                    AideGo was born to bridge this gap. We combine high-performance technology with deep human compassion to create a service that families can trust with their most precious loved ones.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Standards Section - Redesigned (Sync with Roadmap Style) */}
      <Section className="pt-12 lg:pt-20 pb-12 lg:pb-20 bg-white overflow-hidden">
        <Container>
          <div className="text-center mb-12 lg:mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-[0.65rem] mb-6 tracking-widest uppercase">
                The Standards
             </div>
             <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-6 tracking-tighter leading-tight">
                Built on <span className="text-primary italic">trust.</span>
             </h2>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-border/60 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {[
                { ...values[0], img: "/images/HIW_04.jpg" },
                { ...values[1], img: "/images/HIW_05.jpg" },
                { ...values[2], img: "/images/AB_001.jpg" },
              ].map((value, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative bg-white rounded-[3rem] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 border border-border/50 flex flex-col h-full">
                    {/* Step Number Badge (Floating) */}
                    <div className="absolute top-6 right-6 z-20 px-4 py-1.5 bg-primary text-white text-[0.6rem] font-black uppercase tracking-widest rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      Standard {value.id}
                    </div>

                    {/* Image Frame - Clean panoramic height */}
                    <div className="relative aspect-[1.6/1] overflow-hidden shadow-inner">
                      <Image 
                        src={value.img} 
                        alt={value.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        unoptimized
                      />
                      {/* Subtle dark shade overlay */}
                      <div className="absolute inset-0 bg-black/15 z-10 group-hover:bg-black/5 transition-colors duration-500" />
                    </div>

                    {/* Content - Compact Padded area */}
                    <div className="p-6 lg:p-8 text-center flex-grow flex flex-col justify-center">
                      <span className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary mb-2 block">
                        Standard {value.id}
                      </span>
                      <h3 className="text-xl md:text-2xl font-heading font-semibold text-text mb-4 tracking-tight leading-tight">
                        {value.title}
                      </h3>
                      <p className="text-sm md:text-base text-text-muted leading-relaxed font-normal">
                        {value.description}
                      </p>
                    </div>

                    {/* Visual Connector Dot (Desktop) */}
                    <div className="hidden lg:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-border group-hover:bg-primary group-hover:scale-150 transition-all duration-300 z-30" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Redesigned Final CTA - Split Cards (Sync with How It Works) */}
      <Section className="pt-12 lg:pt-20 pb-32 lg:pb-48 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Partnerships CTA */}
            <ScrollReveal>
              <div className="group relative bg-surface rounded-[3.5rem] p-10 lg:p-16 xl:p-20 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 flex flex-col h-full border border-border/50">
                 {/* Decorative Blobs */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />
                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                 
                 <div className="relative z-10 flex-grow">
                    <div className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary mb-6">
                      For Organizations
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-heading font-semibold text-text mb-8 tracking-tighter leading-[0.95]">
                      Scale your <br /> <span className="text-primary italic">impact.</span>
                    </h3>
                    <p className="text-lg text-text-muted font-normal mb-12 max-w-sm leading-relaxed">
                      Partner with AideGo to provide specialized, dignified transport for your medical facility or organization.
                    </p>
                 </div>
                 
                 <div className="relative z-10">
                    <Link 
                      href="/contact"
                      className="inline-flex h-16 px-10 items-center justify-center rounded-2xl bg-primary text-white font-bold text-sm transition-all hover:bg-text hover:text-white active:scale-95 shadow-xl shadow-primary/20"
                    >
                      Contact Partnerships
                    </Link>
                 </div>
              </div>
            </ScrollReveal>

            {/* Careers CTA */}
            <ScrollReveal delay={0.1}>
              <div className="group relative bg-text rounded-[3.5rem] p-10 lg:p-16 xl:p-20 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 flex flex-col h-full">
                 {/* Decorative Blobs */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700" />
                 <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                 
                 <div className="relative z-10 flex-grow">
                    <div className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/40 mb-6">
                      For Caregivers
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-heading font-semibold text-white mb-8 tracking-tighter leading-[0.95]">
                      Build your <br /> <span className="text-primary italic">career.</span>
                    </h3>
                    <p className="text-lg text-white/60 font-normal mb-12 max-w-sm leading-relaxed">
                      Join our team of elite caregivers and help us move Nigeria with compassion and dignity.
                    </p>
                 </div>
                 
                 <div className="relative z-10">
                    <Link 
                      href="/aides"
                      className="inline-flex h-16 px-10 items-center justify-center rounded-2xl bg-white text-primary font-bold text-sm transition-all hover:bg-primary hover:text-white active:scale-95 shadow-xl"
                    >
                      Apply as a Caregiver
                    </Link>
                 </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
