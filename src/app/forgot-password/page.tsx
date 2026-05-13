"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/Form";
import Button from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row relative overflow-hidden pt-32 md:pt-0">
      {/* Cinematic Image Side */}
      <div className="hidden md:block md:w-1/2 lg:w-[55%] relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/LG_1.jpg"
            alt="Secure access"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>
        
        {/* Premium Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay" />
        
        <div className="absolute inset-0 flex flex-col justify-between p-16 lg:p-24 z-10">
          <Link href="/" className="inline-block group">
            <span className="text-3xl font-heading font-bold text-white tracking-tighter group-hover:scale-105 transition-transform inline-block">AideGo</span>
          </Link>
          
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-[1.1]">
                Security at every <span className="text-primary italic">step.</span>
              </h2>
              <div className="flex items-center gap-6">
                <div className="h-px w-12 bg-white/30" />
                <p className="text-xl text-white/70 font-medium leading-relaxed italic">
                  Restoring your access quickly and securely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Glass Elements */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center py-16 md:pt-32 px-8 sm:px-12 lg:px-24 bg-white relative z-20 shadow-[-50px_0_100px_rgba(0,0,0,0.1)]">
        <div className="max-w-md w-full mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="mb-10">
                  <h1 className="text-4xl font-heading font-bold tracking-tight text-text mb-4">Reset password</h1>
                  <p className="text-text-muted font-medium text-lg leading-relaxed">
                    Enter the email associated with your account and we&apos;ll send a code to reset your password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <Input 
                    label="Email address" 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    className="rounded-2xl py-4 bg-surface/30 border-border/40 focus:bg-white focus:border-primary transition-all shadow-sm" 
                  />

                  <Button 
                    fullWidth 
                    type="submit"
                    className="py-5 font-bold rounded-2xl mt-4 shadow-2xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all bg-text text-white hover:bg-primary"
                  >
                    Send reset link
                  </Button>
                </form>

                <div className="mt-12 text-center">
                  <Link href="/login" className="text-sm font-bold text-primary hover:underline underline-offset-4 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to login
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
                <h1 className="text-4xl font-heading font-bold tracking-tight text-text mb-4">Check your email</h1>
                <p className="text-text-muted font-medium text-lg leading-relaxed mb-10">
                  We have sent a password reset link to <br />
                  <span className="text-text font-bold">your email address</span>.
                </p>
                <Button 
                  fullWidth 
                  onClick={() => setIsSubmitted(false)}
                  className="py-5 font-bold rounded-2xl bg-surface text-text hover:bg-border transition-all"
                >
                  Didn&apos;t receive it? Resend link
                </Button>
                <div className="mt-8">
                  <Link href="/login" className="text-sm font-bold text-primary hover:underline underline-offset-4">
                    Back to login
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
