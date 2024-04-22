import React from "react";
import { Hero } from "@/components/Hero";
import { PoweredBy } from "@/components/component/powered-by";
import WhyClub from "@/components/component/WhyClub";
import { Navbar } from "@/components/component/Navbar";
import { Footer } from "@/components/component/footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PoweredBy />
      <WhyClub />
      <Footer />
    </div>
  );
}
