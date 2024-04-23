"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/components/component/Navbar";
import { Footer } from "@/components/component/footer";
import { useState } from "react";

export default function Contact() {
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');

  const sendMail = async (ev:any) => {
   
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        message
      })
    });
    if(response.ok){
      alert('Message sent successfully to our email. We will get back to you soon.');
      setEmail('');
      setMessage('') ;
    }else{
      alert('Failed to send message on email! Please try again later.');
    }
  }

  return (
    <>
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
            onChange={(ev)=>setEmail(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Your Message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-20 p-2"
            value={message}
            onChange={(ev)=>setMessage(ev.target.value)}
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-zinc cursor-pointer mt-4 relative z-10"
          onClick={sendMail}
        >
          Send Message
        </button>
        <BackgroundBeams />
      </div>
      <Footer />
    </>
  );
}
