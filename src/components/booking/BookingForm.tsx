"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Input, Checkbox, SegmentedToggle } from "@/components/ui/Form";

interface BookingFormProps {
  isSidebar?: boolean;
}

const BookingForm = ({ isSidebar = false }: BookingFormProps) => {
  const [bookingType, setBookingType] = useState("Book Now");
  const [tripType, setTripType] = useState("One Way");
  const [needsAide, setNeedsAide] = useState("No");
  const [destination, setDestination] = useState("");
  
  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user_info');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData.name) setFullName(userData.name);
        if (userData.email) setEmail(userData.email);
      } catch (e) {
        console.error("Error parsing user_info", e);
      }
    }
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "b400bbb2-1663-4d49-8865-9f104a8abf61");
    formData.append("subject", `New Ride Booking from ${fullName}`);
    formData.append("booking_type", bookingType);
    formData.append("trip_type", tripType);
    formData.append("needs_aide", needsAide);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Success! Your booking request has been sent.");
        setFullName("");
        setEmail("");
        setPhone("");
        setDestination("");
        // Reset form fields
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Error! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Error! Connection failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  };

  const revealVariants = {
    hidden: { height: 0, opacity: 0, marginTop: 0, marginBottom: 0, overflow: "hidden" },
    visible: { 
      height: "auto", 
      opacity: 1, 
      marginTop: isSidebar ? 16 : 24, 
      marginBottom: isSidebar ? 16 : 24,
      transition: { duration: 0.4, ease: "circOut" } 
    },
  };

  const formContent = (
    <div className={isSidebar ? "space-y-8" : "p-8 lg:p-16"}>
      <form onSubmit={onSubmit} className={isSidebar ? "space-y-8" : "space-y-12"}>
        {/* Section 1: Personal Info */}
        <div className="space-y-6">
          {!isSidebar && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[0.65rem] font-black uppercase tracking-widest">
              Step 01
            </div>
          )}
          <h2 className={isSidebar ? "text-xl font-heading font-bold tracking-tight" : "text-3xl font-heading font-bold tracking-tight"}>
            Personal Details
          </h2>
          <div className={isSidebar ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
            <Input 
              label="Full Name" 
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. John Doe" 
              required 
              className="rounded-2xl py-3" 
            />
            <Input 
              label="Email Address" 
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. john@example.com" 
              required 
              className="rounded-2xl py-3" 
            />
            <Input 
              label="Phone Number" 
              name="phone"
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +234..." 
              required 
              className="rounded-2xl py-3" 
            />
          </div>
        </div>

        <div className="w-full h-px bg-border/40" />

        {/* Section 2: Trip Details */}
        <div className="space-y-6">
          {!isSidebar && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[0.65rem] font-black uppercase tracking-widest">
              Step 02
            </div>
          )}
          <h2 className={isSidebar ? "text-xl font-heading font-bold tracking-tight" : "text-3xl font-heading font-bold tracking-tight"}>
            Ride Information
          </h2>
          
          <div className="space-y-6">
            <SegmentedToggle
              label="When would you like to ride?"
              options={["Book Now", "Later"]}
              activeOption={bookingType === "Schedule for Later" ? "Later" : "Book Now"}
              onChange={(opt) => setBookingType(opt === "Later" ? "Schedule for Later" : "Book Now")}
            />

            <AnimatePresence mode="wait">
              {bookingType === "Schedule for Later" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={revealVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-surface p-6 rounded-2xl border border-border/50"
                >
                  <Input label="Date" name="later_date" type="date" required className="rounded-xl py-2" />
                  <Input label="Time" name="later_time" type="time" required className="rounded-xl py-2" />
                </motion.div>
              )}
            </AnimatePresence>

            <SegmentedToggle
              label="Trip Type"
              options={["One Way", "Round Trip"]}
              activeOption={tripType}
              onChange={setTripType}
            />

            <div className="space-y-4">
              <Input label="Pickup" name="pickup_address" placeholder="Pickup address" required className="rounded-2xl py-3" />
              <Input 
                label="Destination" 
                name="destination_address"
                placeholder="Where to?" 
                value={destination}
                onChange={handleDestinationChange}
                required 
                className="rounded-2xl py-3"
              />
            </div>

            <AnimatePresence mode="wait">
              {tripType === "Round Trip" && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={revealVariants}
                  className="bg-surface p-6 rounded-2xl border border-border/50 space-y-4"
                >
                  <h4 className="font-bold text-primary text-[10px] uppercase tracking-widest">Return Journey</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Date" name="return_date" type="date" required className="rounded-xl py-2" />
                    <Input label="Time" name="return_time" type="time" required className="rounded-xl py-2" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full h-px bg-border/40" />

        {/* Section 3: Additional Needs */}
        <div className="space-y-6">
          {!isSidebar && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[0.65rem] font-black uppercase tracking-widest">
              Step 03
            </div>
          )}
          <h2 className={isSidebar ? "text-xl font-heading font-bold tracking-tight" : "text-3xl font-heading font-bold tracking-tight"}>
            Special Care
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-surface/50 border border-border/30">
              <label className="block text-[10px] font-bold text-text mb-4 uppercase tracking-[0.15em]">
                Special Needs
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Elderly", "Wheelchair", "Surgery", "Other"].map((need) => (
                  <Checkbox key={need} id={need} name="special_needs[]" label={need} className="font-bold text-xs" />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <SegmentedToggle
                label="Need a trained aide?"
                options={["Yes", "No"]}
                activeOption={needsAide}
                onChange={setNeedsAide}
              />

              <AnimatePresence mode="wait">
                {needsAide === "Yes" && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={revealVariants}
                    className="bg-primary/5 p-4 rounded-xl border border-primary/20"
                  >
                    <p className="text-[10px] text-primary font-bold flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                      </svg>
                      A care assistant will be assigned.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            fullWidth 
            type="submit" 
            disabled={isSubmitting}
            className={`py-4 text-lg font-bold rounded-xl shadow-xl active:scale-[0.98] transition-all bg-text text-white hover:bg-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? "Sending Request..." : "Confirm Booking"}
          </Button>

          {result && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center font-bold text-sm ${result.includes("Success") ? "text-green-600" : "text-red-600"}`}
            >
              {result}
            </motion.p>
          )}
        </div>
      </form>
    </div>
  );

  if (isSidebar) {
    return formContent;
  }

  return (
    <Card padding="none" className="max-w-4xl mx-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border-none rounded-[3.5rem] overflow-hidden bg-white">
      {formContent}
    </Card>
  );
};

export default BookingForm;
