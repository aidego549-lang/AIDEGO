import Hero from "@/components/home/Hero";
import HowItWorksHome from "@/components/home/HowItWorksHome";
import WhoItsFor from "@/components/home/WhoItsFor";
import AideAdvantage from "@/components/home/AideAdvantage";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorksHome />
      <WhoItsFor />
      <AideAdvantage />
      <Testimonials />
      <CTABanner />
    </>
  );
}
