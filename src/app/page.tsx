import React from "react";
import { Footer } from "@/components/component/footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/component/Navbar";
import { PoweredBy } from "@/components/component/powered-by";
import WhyClub from "@/components/component/WhyClub";

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
