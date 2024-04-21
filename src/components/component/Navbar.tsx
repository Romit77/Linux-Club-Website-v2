import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white p-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 ">
        <Link className="flex items-center gap-2" href="#">
          <Image
            alt="Logo"
            className="h-8 w-8"
            height={50}
            src="/club.png"
            width={50}
          />
          <span className="text-lg font-bold">Linux Club </span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <Link className="text-sm font-bold hover:underline" href="/Home">
            Home
          </Link>
          <Link className="text-sm font-bold hover:underline" href="#">
            Events
          </Link>
          <Link className="text-sm font-bold hover:underline" href="#">
            Team
          </Link>
          <Link className="text-sm font-bold hover:underline" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
