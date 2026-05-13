"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Form";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

function LoginContent() {
  const router = useRouter();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Login Success:', tokenResponse);
      
      // Fetch user profile info using the access token
      try {
        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const data = await userInfo.json();
        console.log('User Info:', data);
        
        // Persist user info for the booking page
        localStorage.setItem('user_info', JSON.stringify(data));
        
        // Redirect to /book after successful login
        router.push('/book');
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    },
    onError: (error) => {
      console.error('Login Failed:', error);
      alert('Google Login failed. Please try again.');
    },
  });

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
            alt="Luxury assisted ride"
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
                Luxury tech <br />meets <span className="text-primary italic">compassion.</span>
              </h2>
              <div className="flex items-center gap-6">
                <div className="h-px w-12 bg-white/30" />
                <p className="text-xl text-white/70 font-medium leading-relaxed italic">
                  Experience the standard in assisted transportation.
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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="mb-12">
              <h1 className="text-4xl font-heading font-bold tracking-tight text-text mb-4">Welcome back</h1>
              <p className="text-text-muted font-medium text-lg leading-relaxed">Please enter your details to access your AideGo account.</p>
            </div>

            <div className="space-y-6">
              <button 
                onClick={() => login()}
                className="w-full flex items-center justify-center gap-4 bg-white border border-border/60 py-4 rounded-2xl font-bold text-text hover:bg-surface hover:border-primary/40 transition-all active:scale-[0.98] shadow-sm group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-[15px]">Continue with Google</span>
              </button>

              <div className="relative flex items-center justify-center py-2">
                <div className="w-full h-px bg-border/40" />
                <span className="absolute bg-white px-4 text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">or continue with email</span>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <Input 
                  label="Email address" 
                  type="email" 
                  placeholder="name@example.com" 
                  required 
                  className="rounded-2xl py-4 bg-surface/30 border-border/40 focus:bg-white focus:border-primary transition-all shadow-sm" 
                />
                <div className="space-y-2">
                  <Input 
                    label="Password" 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    className="rounded-2xl py-4 bg-surface/30 border-border/40 focus:bg-white focus:border-primary transition-all shadow-sm" 
                  />
                  <div className="flex items-center justify-end">
                    <Link href="/forgot-password" className="text-xs font-bold text-primary hover:underline underline-offset-4">Forgot password?</Link>
                  </div>
                </div>

                <Button 
                  onClick={() => router.push('/book')}
                  fullWidth 
                  className="py-5 font-bold rounded-2xl mt-4 shadow-2xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all bg-text text-white hover:bg-primary"
                >
                  Log in to account
                </Button>
              </form>

              <p className="text-center text-sm font-medium text-text-muted pt-8">
                Don&apos;t have an account yet?{" "}
                <Link href="/signup" className="text-primary font-bold hover:underline underline-offset-4">Sign up for free</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <GoogleOAuthProvider clientId="126014934329-rpjtm9dfgvgfidmgnlrqv0qi8s7gqf2b.apps.googleusercontent.com">
      <LoginContent />
    </GoogleOAuthProvider>
  );
}
