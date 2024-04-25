import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function contact() {
  return (
    <div className="dark bg-gray-950 text-gray-50 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-md">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-400">
            Fill out the form below and well get back to you as soon as
            possible.
          </p>
          <form className="space-y-4">
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
