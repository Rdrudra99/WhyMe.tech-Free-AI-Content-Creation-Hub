import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Aarav",
    username: "@aaravwrites",
    body: "Amazing tool! It saves so much time and effort.",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Ananya",
    username: "@ananyacreates",
    body: "Incredible efficiency and quality. A must-have!",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Raj",
    username: "@rajwrites",
    body: "Excellent for quick, high-quality content.",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Priya",
    username: "@priyacreates",
    body: "Great tool that simplifies content creation.",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Vikram",
    username: "@vikramwrites",
    body: "Game-changer for my writing process!",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Isha",
    username: "@ishawrites",
    body: "Consistently high-quality results. Love it!",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
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
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
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

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
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
  );
}
