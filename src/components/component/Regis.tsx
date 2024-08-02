"use client";
import axios from "axios";
import { useState } from "react";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email();
const nameSchema = z.string().min(2);
export default function Regis() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function reqHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameValidation = nameSchema.safeParse(name);
    const emailValidation = emailSchema.safeParse(email);

    console.log("Name validation result:", nameValidation);
    console.log("Email validation result:", emailValidation);

    if (!nameValidation.success || !emailValidation.success) {
      console.log(
        "Validation failed:",
        nameValidation.error?.issues, // log exact errors
        emailValidation.error?.issues
      );
      toast.error("Enter a valid name and email");
      return;
    }

    try {
      const response = await axios.post(
        "/api/registration",
        {
          name,
          email,
        }
      );
      return toast.success("registered successfully!");
    } catch (e) {
      toast.error("error registering");
    }
  }

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center min-h-screen bg-black px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#c9b3ff]">
              Join the Linux Club
            </h2>
            <p className="mt-2 text-center text-sm text-[#a08bff]">
              Register to become a member.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={reqHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="relative block w-full appearance-none rounded-t-md border border-[#a08bff] px-3 py-2 text-[#c9b3ff] placeholder-[#a08bff] focus:z-10 focus:border-[#c9b3ff] focus:outline-none focus:ring-[#c9b3ff] sm:text-sm"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-b-md border border-[#a08bff] px-3 py-2 text-[#c9b3ff] placeholder-[#a08bff] focus:z-10 focus:border-[#c9b3ff] focus:outline-none focus:ring-[#c9b3ff] sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#c9b3ff] py-2 px-4 text-sm font-medium text-[#1a1a1a] hover:bg-[#a08bff] focus:outline-none focus:ring-2 focus:ring-[#c9b3ff] focus:ring-offset-2"
              >
                Join the Club
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
