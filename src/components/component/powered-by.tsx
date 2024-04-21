import Image from "next/image";

export function PoweredBy() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 md:py-16 lg:py-20">
      <div className="text-center space-y-2">
        <h2 className="text-5xl font-bold">Powered by</h2>
        <p className="text-2xl text-gray-500 dark:text-gray-400">
          Our trusted partners
        </p>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="group relative w-200 h-20">
          <Image
            alt="gmc"
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-colors"
            height={80}
            src="/gmc.png"
            style={{
              aspectRatio: "160/80",
              objectFit: "cover",
            }}
            width={160}
          />
        </div>
        <div className="group relative w-40 h-20">
          <Image
            alt="Logo 2"
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-colors"
            height={80}
            src="/secops.png"
            style={{
              objectFit: "cover",
            }}
            width={450}
          />
        </div>
      </div>
    </section>
  );
}
