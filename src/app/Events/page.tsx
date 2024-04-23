"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";

export default function Events() {
  return (
    <div className="px-4 py-6 md:py-12">
      <div className="mx-auto max-w-5xl grid items-start gap-6">
        <motion.div
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          className="space-y-2"
          initial={{
            opacity: 0,
            translateY: 4,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-center">
            Events Archive
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text text-center">
            A collection of our past events.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                alt="Events"
                className="object-cover w-full aspect-none"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
            </div>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold text-center mt-0">
                {" "}
                {/* Added mt-0 */}
                Third Eye Quest
              </CardTitle>
              <CardDescription>
                Calling all cyber sleuths! Third Eye Quest, part of AdVITya
                fest, challenged you to a thrilling two-phase adventure
                (February 19th & 22nd, 2024). You cracked cryptic codes and
                navigated online mazes in &quot;Digital Infiltration&quot;
                (Phase 1). You then pushed your limits in the offline
                &quot;Extraction Point&quot; (Phase 2) for top-secret intel. You
                competed, collaborated, and conquered this adrenaline-pumping
                quest!
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                alt="Events"
                className="object-cover w-full aspect-none"
                height={300}
                src="/placeholder.svg"
                width={400}
              />
            </div>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-bold mt-0">
                {" "}
                {/* Added mt-0 */}
                Winter Wonderland
              </CardTitle>
              <CardDescription>
                Experience the magic of the holidays with our enchanting light
                display.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
