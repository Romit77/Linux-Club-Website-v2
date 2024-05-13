import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// export function contact() {
//   return (
//     <div className="dark bg-gray-950 text-gray-50 py-12 md:py-24">
//       <div className="container mx-auto px-4 md:px-6 max-w-md">
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold">Get in Touch</h2>
//           <p className="text-gray-400">
//             Fill out the form below and well get back to you as soon as
//             possible.
//           </p>
//           <form className="space-y-4">
//             <div className="space-y-2">
//               <Label className="text-gray-300" htmlFor="email">
//                 Email
//               </Label>
//               <Input
//                 className="bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400"
//                 id="email"
//                 placeholder="example@email.com"
//                 type="email"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label className="text-gray-300" htmlFor="message">
//                 Message
//               </Label>
//               <Textarea
//                 className="bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400 min-h-[120px]"
//                 id="message"
//                 placeholder="Write your message..."
//               />
//             </div>
//             <Button className="w-full" type="submit">
//               Submit
//             </Button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ContactUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Have a question or need help? Fill out the form below and we&apos;ll
            get back to you as soon as possible.
          </p>
        </div>
        <div className="max-w-[500px] mx-auto space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[150px]"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <Button className="w-full bg-black" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}
