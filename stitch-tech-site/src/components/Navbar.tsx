"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm shadow-on-surface/5">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto relative">
        <Link href="/" className="text-2xl font-black text-on-surface tracking-tighter">
          Caudate Tech
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link 
              href="/services" 
              className="font-bold tracking-tight text-outline hover:text-primary transition-all duration-300 ease-in-out flex items-center gap-1 py-2"
            >
              Services
              <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
            </Link>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="bg-white shadow-xl rounded-2xl border border-outline-variant/10 p-4 grid gap-2">
                  <Link href="/services/consulting" onClick={() => setIsServicesOpen(false)} className="p-3 hover:bg-surface-container-low rounded-xl transition-colors group">
                    <div className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Strategy Consulting</div>
                    <div className="text-[10px] text-outline font-medium">Enterprise architectural planning.</div>
                  </Link>
                  <Link href="/services/seo" onClick={() => setIsServicesOpen(false)} className="p-3 hover:bg-surface-container-low rounded-xl transition-colors group">
                    <div className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Search Authority</div>
                    <div className="text-[10px] text-outline font-medium">Technical SEO & Content Hubs.</div>
                  </Link>
                  <Link href="/services/paid-media" onClick={() => setIsServicesOpen(false)} className="p-3 hover:bg-surface-container-low rounded-xl transition-colors group">
                    <div className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Performance Marketing</div>
                    <div className="text-[10px] text-outline font-medium">Precision-managed ad spend.</div>
                  </Link>
                  <Link href="/services/content-strategy" onClick={() => setIsServicesOpen(false)} className="p-3 hover:bg-surface-container-low rounded-xl transition-colors group">
                    <div className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">Content Strategy</div>
                    <div className="text-[10px] text-outline font-medium">Thought leadership programming.</div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/case-studies" 
            className="font-bold tracking-tight text-outline hover:text-primary transition-all duration-300 ease-in-out"
          >
            Case Studies
          </Link>
          <Link 
            href="/about" 
            className="font-bold tracking-tight text-outline hover:text-primary transition-all duration-300 ease-in-out"
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden lg:block text-primary font-semibold px-4 py-2 transition-all duration-300 hover:opacity-80 active:scale-95">
            Get a Quote
          </button>
          <Link 
            href="/contact"
            className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 hover:opacity-90 active:scale-95 shadow-lg shadow-primary/20"
          >
            Start Project
          </Link>
        </div>
        <div className="bg-gradient-to-r from-primary to-primary-container h-[2px] w-full absolute bottom-0 left-0"></div>
      </div>
    </nav>
  );
};

export default Navbar;
