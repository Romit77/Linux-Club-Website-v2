"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Footer } from "./footer";

export default function Members() {
  return (
    <>
      <Navbar />;
      <div className="h-100vh w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative mt-10 scroll-smooth">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>

        <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6">
          <div className="space-y-3">
            <motion.h2
              className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl p-5 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Faculty Coordinators
            </motion.h2>
            {/* <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
            The people behind the magic.
          </p> */}
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center justify-start space-y-2">
              <motion.div
                className="rounded-full overflow-hidden w-36 h-36 border dark:border-gray-850"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  alt="@shadcn"
                  className="rounded-full object-cover"
                  height="144"
                  src="/psir.jpg"
                  style={{
                    aspectRatio: "144/144",
                    objectFit: "cover",
                  }}
                  width="144"
                />
              </motion.div>
              <div className="space-y-1 text-sm">
                <motion.h3
                  className="font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Dr. Pushpinder Singh Patheja
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {" "}
                  Coordinator
                </motion.p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start space-y-2">
              <motion.div
                className="rounded-full overflow-hidden w-36 h-36 border dark:border-gray-850"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  alt="@shadcn"
                  className="rounded-full object-cover"
                  height="144"
                  src="/rsir.jpg"
                  style={{
                    aspectRatio: "144/144",
                    objectFit: "cover",
                  }}
                  width="144"
                />
              </motion.div>
              <div className="space-y-1 text-sm">
                <motion.h3
                  className="font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Dr. Ram Kumar
                </motion.h3>
                <motion.p
                  className="text-sm text-gray-500 dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Co-Coordinator
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full py-5 md:py-24 lg:py-10">
          <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6">
            <div className="space-y-3">
              <motion.h2
                className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Meet the Team
              </motion.h2>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/vp.jpg"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Parv Daga
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    President
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/sec.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Manan Kohli
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Vice President
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/texh.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Yashwardhan Rastogi
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Secretary
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/pr.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Bhuvika Aggarwal
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    PR & Outreach Lead
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/event.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Rakshita Singh
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Event Lead
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/techLead.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Hemant Venugopal
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Technical Lead
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/design.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Anjali Aravind
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Design Lead
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover bg-transparent"
                    height="144"
                    src="/sm.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "fill",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Hardik Naman
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Social Media Lead
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/rd.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "contain",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Purnima Sahoo
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Research and Development Lead
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/web.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Romit Dey
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Web Lead
                  </motion.p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start space-y-2 md:col-start-3">
                <motion.div
                  className="rounded-full overflow-hidden border border-gray-200 dark:border-gray-850 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Image
                    alt="@shadcn"
                    className="rounded-full object-cover"
                    height="144"
                    src="/mark.png"
                    style={{
                      aspectRatio: "144/144",
                      objectFit: "cover",
                    }}
                    width="144"
                  />
                </motion.div>
                <div className="space-y-1 text-sm">
                  <motion.h3
                    className="font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Ananya Dave
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Marketing Lead
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
