"use client";
import { Navbar } from "@/components/component/Navbar";
import { Footer } from "@/components/component/footer";
import { useState } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Toaster, toast } from "sonner";
import { z } from "zod";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async () => {
    try {
      const parsedEmail = schema.parse(email);
    } catch (error: any) {
      toast.error("Invalid email format");
      return;
    }

    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    });
    if (response.ok) {
      toast.success(
        "Message sent successfully to our email. We will get back to you soon."
      );
      setEmail("");
      setMessage("");
    } else {
      toast.error("Failed to send message on email! Please try again later.");
    }
  };

  const schema = z.string().email({ message: "invalid email format" });

  return (
    <>
      <Toaster />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="h-100vh w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative  mt-10 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
        <Navbar />
        <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Contact Us
            </h1>
            <p></p>
            <p className="text-gray-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              We are here to help with any questions about the club or events.
            </p>
            <input
              type="text"
              placeholder="Enter your email address"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-10 p-2"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="text"
              placeholder="Your Message"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-20 p-2"
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-zinc cursor-pointer mt-4 relative z-10"
            onClick={sendMail}
          >
            Send Message
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

// import React from "react";

// export default function Contact() {
//   return <div>contact page</div>;
// }

//new branch test
