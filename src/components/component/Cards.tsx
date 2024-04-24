import { HoverEffect } from "../ui/card-hover-effect";

export function Cards() {
  return (
    <div className="max-w-6xl mx-auto px-10 p-2 z-0 text-purple-700 grid grid-cols-2 gap-4">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Leadership Opportunities",
    description:
      "Embrace the chance to assume pivotal roles within the club. You'll be at the forefront of organizing captivating events, enlightening workshops, and enriching tutorials.",
    link: "/",
  },
  {
    title: "Skill Development",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with kindred spirits who share your Linux fervor. Our club serves asthe perfect arena for networking and collaboration with individuals from diverse backgrounds.",
    link: "/",
  },
  {
    title: "Networking Opportunities",
    description:
      "Connect with kindred spirits who share your Linux fervor. Our club serves asthe perfect arena for networking and collaboration with individuals from diverse backgrounds.",
    link: "/",
  },
];
