"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Input, Textarea } from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [result, setResult] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "2a119fab-e967-4dce-ae5d-af632fceafc4");

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

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[92vh] min-h-[700px] flex items-end justify-center overflow-hidden pb-12 lg:pb-20">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Contact_001.jpg"
            alt="Contact AideGo Hero"
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
              <h1 className="text-4xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight text-white">
                Let&apos;s start a <span className="text-primary italic">conversation.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
                We&apos;re here to help. Reach out with any questions, feedback, or partnership enquiries.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <Section bg="white" className="py-24 lg:py-40 relative">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
            {/* Left Side: Info */}
            <div className="lg:w-5/12">
              <ScrollReveal>
                <div className="space-y-12">
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-6 tracking-tight">Direct Channels</h2>
                    <p className="text-text-muted text-lg mb-10">Choose the method that works best for you. Our team is standing by.</p>
                    
                    <div className="space-y-6">
                      <Link 
                        href="https://wa.me/234XXXXXXXXXX" 
                        target="_blank"
                        className="group flex items-center gap-6 p-8 rounded-[2.5rem] bg-surface border border-border/50 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-primary/20"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#25D366] shadow-sm group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-text text-lg mb-1">WhatsApp Chat</h4>
                          <p className="text-sm text-text-muted font-medium">Quick responses for queries</p>
                        </div>
                      </Link>

                      <Link 
                        href="mailto:hello@aidego.com" 
                        className="group flex items-center gap-6 p-8 rounded-[2.5rem] bg-surface border border-border/50 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-primary/20"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-text text-lg mb-1">Email Support</h4>
                          <p className="text-sm text-text-muted font-medium">For partnerships & detailed inquiries</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <h4 className="text-sm font-bold text-text uppercase tracking-widest mb-6">Social Media</h4>
                    <div className="flex flex-wrap gap-8">
                      {[
                        { 
                          name: "Instagram", 
                          icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> 
                        },
                        { 
                          name: "Twitter", 
                          icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        },
                        { 
                          name: "Facebook", 
                          icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        },
                        { 
                          name: "TikTok", 
                          icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.77a6.738 6.738 0 0 1-1.9 4.63c-1.31 1.17-3.11 1.88-4.91 1.92-1.8.04-3.6-.58-4.96-1.76a6.711 6.711 0 0 1-2.31-4.86c0-1.86.76-3.64 2.14-4.87 1.41-1.24 3.3-1.89 5.18-1.77l-.01 3.99c-1.13-.06-2.26.28-3.1 1.01-.8.64-1.28 1.62-1.3 2.63-.02 1.01.4 2.01 1.13 2.7.71.71 1.71 1.09 2.72 1.06 1.01-.03 1.98-.48 2.62-1.26.58-.71.88-1.63.88-2.55V0h.02z"/></svg>
                        }
                      ].map((social) => (
                        <a key={social.name} href="#" className="flex items-center gap-4 text-text-muted hover:text-primary transition-all group">
                          <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm">
                            {social.icon}
                          </div>
                          <span className="font-bold text-sm">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-7/12 w-full">
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-8 lg:p-16 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-border/50 relative overflow-hidden">
                  <form onSubmit={onSubmit} className="relative z-10 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <Input label="Full Name" name="name" placeholder="e.g. John Doe" required className="rounded-2xl border-border/50 focus:border-primary py-4" />
                      <Input label="Email Address" name="email" type="email" placeholder="e.g. john@example.com" required className="rounded-2xl border-border/50 focus:border-primary py-4" />
                    </div>
                    <Input label="Subject" name="subject" placeholder="How can we help?" required className="rounded-2xl border-border/50 focus:border-primary py-4" />
                    <Textarea label="Message" name="message" placeholder="Tell us more about your inquiry..." required className="rounded-2xl border-border/50 focus:border-primary min-h-[160px]" />
                    
                    <div className="space-y-4">
                      <Button 
                        fullWidth 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`py-5 text-lg font-bold rounded-2xl bg-text hover:bg-primary transition-all shadow-xl hover:shadow-primary/30 active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
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
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
