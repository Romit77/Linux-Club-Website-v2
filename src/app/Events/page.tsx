"use client";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/component/Navbar";
import { Footer } from "@/components/component/footer";
import { motion } from "framer-motion";

export default function events() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto justify-center items-center flex py-12 px-4 md:px-6 mt-10">
        <div className="grid gap-12 text-white text-center">
          <div className="align-middle">
            <motion.h2
              className="mb-6 text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Upcoming Events
            </motion.h2>
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="Event 1"
                    className="aspect-[3/1] rounded-lg object-cover w-full"
                    height="1000"
                    src="/reveal.png"
                    width="2250"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <motion.h2
              className="mb-6 text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Past Events
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <motion.span className="sr-only">View Event</motion.span>
                </Link>
                <Image
                  alt="Past Event 1"
                  className="aspect-[5/3] w-full rounded-t-lg object-cover"
                  height="300"
                  src="/silent.jpg"
                  width="500"
                />
                <div className="bg-white p-4 dark:bg-gray-950 object-contain text-gray-400">
                  <motion.h3
                    className="font-bold text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    College Rivals
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Boompanda X Linux Club
                  </motion.p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Event</span>
                </Link>
                <Image
                  alt="Past Event 2"
                  className="aspect-[5/3] w-full rounded-t-lg object-cover"
                  height="300"
                  src="/disco.jpg"
                  width="500"
                />
                <div className="bg-white p-4 dark:bg-gray-950 text-gray-400">
                  <motion.h3
                    className="font-bold text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Silent Disco
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    AdVITya &apos;24
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
