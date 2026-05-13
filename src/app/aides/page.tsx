"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Form";
import { motion } from "framer-motion";

export default function AidePage() {
  const [result, setResult] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "b3daeee1-ebf5-470f-ab01-f8a6bb8dabab");
    formData.append("subject", "New Aide Waitlist Application");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const responsibilities = [
    {
      title: "Vehicle Assistance",
      description: "Assist passengers with boarding and alighting from vehicles safely and comfortably.",
      icon: "🚗",
    },
    {
      title: "Companionship",
      description: "Provide a calm and friendly presence throughout the journey to reduce anxiety.",
      icon: "🤝",
    },
    {
      title: "Navigation",
      description: "Help passengers with bag handling, door-to-door guidance, and basic communication.",
      icon: "🗺️",
    },
    {
      title: "Safety Awareness",
      description: "Be trained in basic first aid and stay alert to any medical needs of the passenger.",
      icon: "🩹",
    },
  ];

  const benefits = [
    { title: "Flexible Hours", description: "Work when it suits you and manage your own schedule." },
    { title: "Weekly Payments", description: "Receive transparent, reliable payments every single week." },
    { title: "Free Training", description: "We invest in your skills with free first aid and care training." },
    { title: "Meaningful Work", description: "Make a real, tangible difference in people's lives every day." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-end justify-center overflow-hidden pb-20">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Aide_01.jpg"
            alt="Become an AideGo Hero"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <Container className="relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-heading font-bold leading-tight mb-4 tracking-tight text-white">
                Be the care behind every <span className="text-primary italic">ride.</span>
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
                Join our team of trained aides and help people with special needs travel safely and with dignity.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="#waitlist" 
                  className="w-full sm:w-52 px-8 py-3.5 bg-white text-text rounded-full font-bold text-base shadow-xl hover:bg-white/90 hover:-translate-y-0.5 transition-all text-center"
                >
                  Join the Waitlist
                </Link>
                <Link 
                  href="#responsibilities" 
                  className="w-full sm:w-52 px-8 py-3.5 bg-transparent border-2 border-white/50 text-white rounded-full font-bold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-y-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Responsibilities */}
      <Section id="responsibilities" bg="white" className="py-24 lg:py-32">
        <Container>
          <div className="text-center mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-[0.65rem] mb-6 tracking-[0.2em] uppercase">
                Core Mission
             </div>
             <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-6 tracking-tighter leading-tight">
                What Aides <span className="text-primary italic">do.</span>
              </h2>
             <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                As an AideGo assistant, you are the heart of our service, providing the human touch that makes travel possible for everyone.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responsibilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="group relative bg-surface p-10 rounded-[3rem] border border-border/50 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 h-full flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center text-4xl mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Aide Standard: Requirements & Benefits */}
      <Section bg="surface" className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[0.65rem] mb-6 tracking-[0.2em] uppercase">
                 The Standard
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-semibold text-text mb-8 tracking-tighter leading-tight">
                Excellence is our <br /> <span className="text-primary italic">minimum requirement.</span>
              </h2>
              <p className="text-lg text-text-muted mb-12 max-w-lg leading-relaxed">
                We take care of our aides so they can take care of others. Join a community of professionals dedicated to service.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Must be 21 years or older",
                  "Pass a thorough background and character check",
                  "Complete AideGo first aid awareness training (provided and free)",
                  "Be patient, compassionate, and reliable",
                  "Own a smartphone and be comfortable using apps"
                ].map((req) => (
                  <li key={req} className="flex gap-5 items-start group">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-white text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-text font-semibold text-lg pt-0.5">{req}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Decorative background for benefits grid */}
              <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -m-8 blur-3xl -z-10" />
              
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={0.2 + (index * 0.1)}>
                  <div className="p-8 bg-white rounded-[2.5rem] border border-border/50 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 font-black italic">
                      B0{index + 1}
                    </div>
                    <h3 className="font-bold text-text mb-3 text-lg tracking-tight">{benefit.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Waitlist Form */}
      <Section id="waitlist" bg="white" className="py-24 lg:py-40 overflow-hidden relative">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-[0.65rem] mb-6 tracking-[0.2em] uppercase">
                   Apply Now
                </div>
                <h2 className="text-4xl md:text-6xl font-heading font-semibold text-text mb-8 tracking-tighter leading-tight">
                  Ready to start your <br /> <span className="text-primary italic">new career?</span>
                </h2>
                <p className="text-lg text-text-muted mb-10 leading-relaxed max-w-md">
                  Fill in your details below and we&apos;ll be in touch when we have openings in your area. We look forward to meeting you!
                </p>
                
                <div className="space-y-8">
                   <div className="flex gap-6 items-center">
                      <div className="w-14 h-14 rounded-2xl bg-surface border border-border/50 flex items-center justify-center text-primary shadow-sm">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                         </svg>
                      </div>
                      <div>
                         <h4 className="font-bold text-text">Quick Response</h4>
                         <p className="text-sm text-text-muted">We review applications within 48 hours.</p>
                      </div>
                   </div>
                   <div className="flex gap-6 items-center">
                      <div className="w-14 h-14 rounded-2xl bg-surface border border-border/50 flex items-center justify-center text-primary shadow-sm">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174a1.244 1.244 0 0 0 1.504 1.125 2.223 2.223 0 0 1 2.453 2.453 1.244 1.244 0 0 0 1.125 1.504 2.223 2.223 0 0 1 2.453 2.453 1.244 1.244 0 0 0 1.125 1.504 2.223 2.223 0 0 1 2.453 2.453 1.244 1.244 0 0 0 1.125 1.504 2.223 2.223 0 0 1 2.453 2.453 1.244 1.244 0 0 0 1.125 1.504" />
                         </svg>
                      </div>
                      <div>
                         <h4 className="font-bold text-text">Certified Training</h4>
                         <p className="text-sm text-text-muted">Get fully certified upon successful onboarding.</p>
                      </div>
                   </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2 w-full">
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-border/50 relative overflow-hidden">
                  <form onSubmit={onSubmit} className="relative z-10 space-y-6">
                    <div className="space-y-2">
                      <Input label="Full Name" name="name" placeholder="e.g. John Doe" required className="rounded-2xl border-border/50 focus:border-primary" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input label="Phone Number" name="phone" type="tel" placeholder="e.g. +234..." required className="rounded-2xl border-border/50 focus:border-primary" />
                      <Input label="Email Address" name="email" type="email" placeholder="e.g. john@example.com" required className="rounded-2xl border-border/50 focus:border-primary" />
                    </div>
                    <Textarea label="Brief Introduction" name="message" placeholder="Tell us a little about yourself..." required className="rounded-2xl border-border/50 focus:border-primary min-h-[120px]" />
                    
                    <div className="space-y-4">
                      <Button 
                        fullWidth 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`py-5 mt-4 text-lg font-bold rounded-2xl bg-text hover:bg-primary transition-all shadow-xl hover:shadow-primary/30 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? "Sending..." : "Join the Waitlist"}
                      </Button>

                      {result && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`text-center font-bold text-sm ${result.includes("Successfully") ? "text-green-600" : "text-red-600"}`}
                        >
                          {result}
                        </motion.p>
                      )}
                    </div>
                  </form>

                  {/* Subtle decorative blob inside form card */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
