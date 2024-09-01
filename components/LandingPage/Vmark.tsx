import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import React from "react";

const reviews = [
  {
    name: "Rahul",
    username: "@rahul",
    body: "Whyme.tech makes creating e-commerce content effortless. It's a game changer for my business!",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "Writing SEO-friendly blogs has never been this easy. Whyme.tech is a must-have tool!",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Amit",
    username: "@amit",
    body: "Whyme.tech has transformed how I generate content for my website. The results are fantastic!",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Sneha",
    username: "@sneha",
    body: "Creating engaging content for my blog is now a breeze thanks to Whyme.tech.",
    img: "https://avatar.vercel.sh/sneha",
  },
  {
    name: "Rohan",
    username: "@rohan",
    body: "Whyme.tech has revolutionized my SEO strategy. Content creation has never been smoother!",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Meera",
    username: "@meera",
    body: "Whyme.tech helps me generate perfect text for all my e-commerce needs. I'm impressed!",
    img: "https://avatar.vercel.sh/meera",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <React.Fragment>
      <div className="mx-auto space-y-5 py-6 text-center">
        <h2 className="text-blue-600 font-mono text-[14px] font-medium tracking-tight">
          Testimonials
        </h2>
        <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[42px] font-medium leading-tight tracking-tighter">
          Do not take our word for it. Hear what our community has to say
        </h2>
      </div>
      <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden  bg-background max-w-7xl mx-auto">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </React.Fragment>
  );
}
