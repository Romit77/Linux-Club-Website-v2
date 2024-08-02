import React from "react";
import { PoweredBy } from "@/components/component/powered-by";
import WhyClub from "@/components/component/WhyClub";
import { Footer } from "@/components/component/footer";
import { lazy } from "react";

const Hero = lazy(()=>import("@/components/Hero")) ;
const Navbar = lazy(()=>import("@/components/component/Navbar")) ;

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <PoweredBy />
      <WhyClub />
      <Footer />
    </div>
  );
}
