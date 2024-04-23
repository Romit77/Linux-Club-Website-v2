import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/component/Navbar";
import { Footer } from "@/components/component/footer";

export default function events() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto justify-center items-center flex py-12 px-4 md:px-6 mt-10">
        <div className="grid gap-12">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Upcoming Events</h2>
            <Carousel className="w-full max-w-4xl">
              <CarouselContent>
                <CarouselItem>
                  <Image
                    alt="Event 1"
                    className="aspect-[2/1] w-full rounded-lg object-cover"
                    height="400"
                    src="/placeholder.svg"
                    width="800"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Event 2"
                    className="aspect-[2/1] w-full rounded-lg object-cover"
                    height="400"
                    src="/placeholder.svg"
                    width="800"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Event 3"
                    className="aspect-[2/1] w-full rounded-lg object-cover"
                    height="400"
                    src="/placeholder.svg"
                    width="800"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Event 4"
                    className="aspect-[2/1] w-full rounded-lg object-cover"
                    height="400"
                    src="/placeholder.svg"
                    width="800"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    alt="Event 5"
                    className="aspect-[2/1] w-full rounded-lg object-cover"
                    height="400"
                    src="/placeholder.svg"
                    width="800"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">Past Events</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Event</span>
                </Link>
                <Image
                  alt="Past Event 1"
                  className="aspect-[5/3] w-full rounded-t-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="500"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Third Eye Quest</h3>
                  <p className="text-sm text-gray-500">AdVITya &apos;24</p>
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
                  src="/placeholder.svg"
                  width="500"
                />
                <div className="bg-white p-4 dark:bg-gray-950">
                  <h3 className="font-bold text-xl">Silent Disco</h3>
                  <p className="text-sm text-gray-500">AdVITya &apos;24</p>
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
