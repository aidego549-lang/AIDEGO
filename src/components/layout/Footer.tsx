"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Layout";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "How it Works", href: "/how-it-works" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Book a Ride", href: "/book" },
      { name: "Elderly Care", href: "/who-we-serve" },
      { name: "Recovery Support", href: "/who-we-serve" },
      { name: "Become an Aide", href: "/aides" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Safety First", href: "/safety" },
    ]
  };

  return (
    <footer className="bg-white border-t border-border/50 pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-8">
              <span className="text-4xl font-heading font-semibold text-primary tracking-tighter">AideGo</span>
            </Link>
            <p className="text-lg text-text-muted leading-relaxed max-w-sm mb-10 font-normal">
              Redefining assisted mobility with safe, patient-first transportation across Nigeria.
            </p>
            
            {/* App Badges */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-2xl transition-all shadow-sm hover:shadow-xl active:scale-95"
              >
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M17.5,12.5c0-2.8,2.3-4.2,2.4-4.2c-1.3-1.9-3.3-2.1-4-2.2c-1.7-0.2-3.3,1-4.2,1c-0.8,0-2.2-1-3.6-0.9c-1.9,0-3.6,1.1-4.6,2.8 c-2,3.4-0.5,8.4,1.4,11.2c1,1.4,2.1,2.9,3.6,2.9c1.4,0,2-0.9,3.7-0.9c1.7,0,2.2,0.9,3.7,0.8c1.5,0,2.5-1.4,3.5-2.8 c1.1-1.6,1.6-3.1,1.6-3.2C20.9,13.1,17.5,14.4,17.5,12.5z M15.8,5.7c0.8-1,1.3-2.3,1.2-3.7c-1.2,0-2.6,0.7-3.5,1.7 c-0.8,0.9-1.5,2.2-1.3,3.5C13.4,7.3,14.9,6.6,15.8,5.7z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[0.5rem] font-bold uppercase tracking-widest opacity-60">Download on</p>
                  <p className="text-xs font-black">App Store</p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white rounded-2xl transition-all shadow-sm hover:shadow-xl active:scale-95"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#00E676" d="M3,20.5L3,3.5c0-0.3,0.1-0.6,0.3-0.8L12,12l-8.7,9.3C3.1,21.1,3,20.8,3,20.5z"/>
                  <path fill="#FFD600" d="M13.4,13.4l2.4,2.4l-3.3,1.9 c-0.3,0.2-0.7,0.2-1,0L13.4,13.4z"/>
                  <path fill="#FF3D00" d="M17,12l3.4,1.9c0.3,0.2,0.3,0.5,0,0.7l-3.3,1.9l-2.4-2.4L17,12z"/>
                  <path fill="#40C4FF" d="M13.4,10.6l3.3-3.3l3.3,1.9 c0.3,0.2,0.3,0.5,0,0.7L17,12L13.4,10.6z"/>
                  <path fill="#00E676" d="M12,12l-8.7-9.3c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.7,0.1,1,0.2l12.5,7.2L12,12z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[0.6rem] font-bold uppercase tracking-widest opacity-60">Get it on</p>
                  <p className="text-xs font-black">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-text mb-8">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm font-bold text-text-muted hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-text mb-8">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm font-bold text-text-muted hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-text mb-8">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm font-bold text-text-muted hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
             <p className="text-xs font-bold text-text-muted">&copy; {currentYear} AideGo Inc.</p>
             <div className="flex gap-5">
                <Link href="#" className="text-text-muted hover:text-primary transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
                <Link href="#" className="text-text-muted hover:text-primary transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </Link>
                <Link href="#" className="text-text-muted hover:text-primary transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Link>
                <Link href="#" className="text-text-muted hover:text-primary transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </Link>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <p className="text-[0.65rem] font-black uppercase tracking-widest text-text-muted">Nigeria — Active Now</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
