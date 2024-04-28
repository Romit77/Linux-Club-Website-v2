import Image from "next/image";

export function PoweredBy() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 lg:py-20 ">
      <div className="text-center space-y-2 mt-10">
        <h2 className="md:text-5xl text-4xl font-bold text-purple-600">
          Powered by
        </h2>
        <p className="md:text-xl text-xl text-gray-500 dark:text-gray-400">
          Our trusted partners
        </p>
      </div>
      <div className="flex justify-center items-center gap-8 sm:gap-8">
        <div className="group relative sm:max-w-[450px] max-w-80  h-40 sm:h-40 py-5 mx-auto ">
          <Image
            alt="gmc"
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-colors py-2"
            height={80}
            src="/gmc.png"
            width={160}
          />
        </div>
        <div className="group relative w-full h-20">
          <Image
            alt="Logo 2"
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-colors py-2"
            height={80}
            src="/secops.png"
            width={450}
          />
        </div>
      </div>
    </section>
  );
}
