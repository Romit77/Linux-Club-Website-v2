"use client";

import Navbar from "@/components/component/Navbar";
import { Footer } from "@/components/component/footer";
import { Toaster, toast } from "sonner";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const [UserEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async () => {
    const loadingToast = toast.loading("Sending message...", {
      duration: Infinity,
    });
    try {
      emailschema.parse(UserEmail);
      messageSchema.parse(message);
    } catch (error: any) {
      toast.error("Invalid email format or message is less than 6 characters");
      return;
    }
    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({ UserEmail, message }),
    });
    if (response.ok) {
      toast.dismiss(loadingToast);
      toast.success(
        "Message sent successfully to our email. We will get back to you soon."
      );
      setUserEmail("");
      setMessage("");
    } else {
      toast.dismiss(loadingToast);
      toast.error("Failed to send message on email! Please try again later.");
    }
  };

  const emailschema = z.string().email({ message: "invalid email format" });
  const messageSchema = z.string().min(6);
  return (
    <>
      <Toaster />
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 mt-20">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-600">
              Contact Us
            </h1>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Have a question or need help? Fill out the form below and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="max-w-[500px] mx-auto space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={UserEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[150px]"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button className="w-full mt-10 " type="submit" onClick={sendMail}>
              Submit
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
