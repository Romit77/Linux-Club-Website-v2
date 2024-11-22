import React from "react";
import { PoweredBy } from "@/components/component/powered-by";
import WhyClub from "@/components/component/WhyClub";
import { Footer } from "@/components/component/footer";
import { lazy } from "react";
// import Overlay from "@/components/component/Overlays";
// import Hero from "@/components/Hero";
// import Navbar from "@/components/component/Navbar";

const Hero = lazy(() => import("@/components/Hero"));
const Navbar = lazy(() => import("@/components/component/Navbar"));

export default function page() {
  return (
    <div>
      {/* <Overlay/> */}
      <Navbar />
      <Hero />
      <PoweredBy />
      <WhyClub />
      <Footer />
    </div>
  );
}
