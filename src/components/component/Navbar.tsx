import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 text-gray-200 p-2 bg-transparent"
      style={{
        background: "transparent",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 ">
        <Link className="flex items-center gap-2" href="#">
          <Image
            alt="Logo"
            className="h-8 w-8"
            height={50}
            src="/club.png"
            width={50}
          />
          <span className="text-xl font-bold ">Linux Club </span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <Link className="text-md font-bold hover:underline" href="/">
            Home
          </Link>
          <Link className="text-md font-bold hover:underline" href="/Events">
            Events
          </Link>
          <Link className="text-md font-bold hover:underline" href="/Team">
            Team
          </Link>
          <Link className="text-md font-bold hover:underline" href="/Contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
