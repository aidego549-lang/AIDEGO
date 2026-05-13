"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can use AideGo?",
      answer: "Anyone with special mobility, visual, age-related, or medical needs who requires extra care during transport. We specialize in making Nigeria accessible for everyone.",
    },
    {
      question: "What does a medical aide do?",
      answer: "Our aides assist with boarding, provide physical support, companionship, and help with destination navigation. They are trained in patient handling and sensitivity.",
    },
    {
      question: "Is the aide service mandatory?",
      answer: "No. You can book a standard ride with just a vetted driver, or add a dedicated Care Aide during the booking process if you need extra hands.",
    },
    {
      question: "How do I pay?",
      answer: "We support multiple payment options including secure in-app card payments, bank transfers, and wallet credits for recurring bookings.",
    },
    {
      question: "Are your drivers trained?",
      answer: "Absolutely. Every driver undergoes a rigorous 5-step vetting process, including criminal background checks and specialized sensitivity training for assisted mobility.",
    },
    {
      question: "What areas do you cover?",
      answer: "We currently cover major hubs across Nigeria, starting with comprehensive coverage in Lagos (Island and Mainland). We are rapidly expanding to other cities and states.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <motion.div 
            key={index} 
            initial={false}
            className={`group rounded-3xl transition-all duration-500 border ${
              isOpen 
                ? "bg-white border-primary/20 shadow-xl shadow-primary/5" 
                : "bg-surface/50 border-border/50 hover:bg-white hover:border-primary/10"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-7 lg:p-8 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className={`text-lg md:text-xl font-heading font-semibold transition-colors duration-300 ${
                isOpen ? "text-primary" : "text-text"
              }`}>
                {faq.question}
              </span>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                isOpen ? "bg-primary text-white rotate-180" : "bg-white text-text-muted group-hover:text-primary"
              }`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto", marginBottom: 0 },
                    collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-7 lg:px-8 pb-8 text-text-muted text-base md:text-lg leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
