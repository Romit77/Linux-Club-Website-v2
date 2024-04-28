// "use client";
// import { Navbar } from "@/components/component/Navbar";
// import { Footer } from "@/components/component/footer";
// import { useState } from "react";
// import { Spotlight } from "@/components/ui/Spotlight";
// import { Toaster, toast } from "sonner";
// import { z } from "zod";

// export default function Contact() {
//   const [UserEmail, setUserEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const sendMail = async () => {
//     try {
//       emailschema.parse(UserEmail);
//     } catch (error: any) {
//       toast.error("Invalid email format");
//       return;
//     }

//     try {
//       messageSchema.parse(message);
//     } catch (error) {
//       toast.error("Message must be of 6 or more characters");
//     }
//     const response = await fetch("/api/mail", {
//       method: "POST",
//       body: JSON.stringify({ UserEmail, message }),
//     });
//     if (response.ok) {
//       toast.success(
//         "Message sent successfully to our email. We will get back to you soon."
//       );
//       setUserEmail("");
//       setMessage("");
//     } else {
//       toast.error("Failed to send message on email! Please try again later.");
//     }
//   };

//   const emailschema = z.string().email({ message: "invalid email format" });
//   const messageSchema = z.string().min(6);

//   return (
//     <>
//       <Toaster />
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <div className="h-100vh w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative  mt-10 ">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_60%,black)]"></div>
//         <Navbar />
//         <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
//           <div className="max-w-2xl mx-auto p-4">
//             <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
//               Contact Us
//             </h1>
//             <p></p>
//             <p className="text-gray-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
//               We are here to help with any questions about the club or events.
//             </p>
//             <input
//               type="text"
//               placeholder="Enter your email address"
//               className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-10 p-2"
//               value={UserEmail}
//               onChange={(e) => setUserEmail(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Your Message"
//               className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 h-20 p-2"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>

//           <button
//             type="submit"
//             className="px-6 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-zinc  mt-4 relative z-10 cursor-pointer"
//             onClick={sendMail}
//           >
//             Send Message
//           </button>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// }
"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/component/Navbar";

export default function contact() {
  <Navbar/>
  return (
    <div className="dark bg-gray-950 text-gray-50 py-12 md:py-24 flex justify-center">
      <div className="container mx-auto px-4 md:px-6 max-w-md">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-400">
            Fill out the form below and well get back to you as soon as
            possible.
          </p>
          <form className="space-y-4 my-[50%]">
            <div className="space-y-2">
              <Label className="text-gray-300" htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400"
                id="email"
                placeholder="example@email.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300" htmlFor="message">
                Message
              </Label>
              <Textarea
                className="bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400 min-h-[120px]"
                id="message"
                placeholder="Write your message..."
              />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

