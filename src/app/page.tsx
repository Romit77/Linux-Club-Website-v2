import React from "react";
import { Hero } from "@/components/Hero";
import { PoweredBy } from "@/components/component/powered-by";
import WhyClub from "@/components/component/WhyClub";

export default function page() {
  return (
    <div>
      <Hero />
      <PoweredBy />
      <WhyClub />
    </div>
  );
}
