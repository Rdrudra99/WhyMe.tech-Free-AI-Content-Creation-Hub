// @ts-ignore
import { cn } from "@/lib/utils";
import Marquee from "./magicui/marquee";

const reviews = [
    {
        name: "Alicia M.",
        body: "Why Me has revolutionized our content creation. Simple and effective!",
        img: "https://images.unsplash.com/photo-1598514944380-3d9ad5b8cfe2",
    },
    {
        name: "John R.",
        body: "User-friendly and a game changer for our team productivity.",
        img: "https://images.unsplash.com/photo-1599681659845-d8fa7a3b9d69",
    },
    {
        name: "Emma L.",
        body: "Perfect for crafting engaging SEO content. Highly recommend!",
        img: "https://images.unsplash.com/photo-1542712014-fd5d6d13d07b",
    },
    {
        name: "Michael S.",
        body: "Efficient and spot-on for our content needs. A must-have tool.",
        img: "https://images.unsplash.com/photo-1602731485501-721fdfd73d82",
    },
    {
        name: "Sophia K.",
        body: "Transforms e-commerce content effortlessly. Outstanding results!",
        img: "https://images.unsplash.com/photo-1600673315486-5f72a7db2f99",
    },
    {
        name: "David T.",
        body: "Consistent and effective for all our content types. Excellent value!",
        img: "https://images.unsplash.com/photo-1506748686214e9df14f35",
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

export default function MarqueeDemo() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <h1 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white text-3xl md:text-5xl md:leading-tight">
                    Hear From Our Satisfied Users
                </h1>
                <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto text-dark font-normal dark:text-muted-dark text-center">
                    Discover how Why Me is elevating content creation for businesses like yours
                </h2>
            </div>
            <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg container mx-auto">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        // @ts-ignore
                        <ReviewCard key={review?.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        // @ts-ignore
                        <ReviewCard key={review?.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    );
}