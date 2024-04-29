import { HoverEffect } from "../ui/card-hover-effect";

export function Cards() {
  return (
    <div className="max-w-6xl mx-auto px-10 p-2 z-0 text-purple-700	flex flex-wrap justify-between">
      <HoverEffect
        items={projects}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10"
      />
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
    title: "Skill Development",
    description:
      "Be an integral part of a community actively contributing to open-source projects. Your contributions can leave a lasting impact on the global tech community.",
    link: "/",
  },
];
