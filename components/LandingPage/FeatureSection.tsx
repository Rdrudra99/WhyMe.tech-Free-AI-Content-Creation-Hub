import {
    BookOpenIcon,
    ChevronRightIcon,
    MessagesSquareIcon,
    ThumbsUpIcon,
} from "lucide-react";

export default function FeatureSection() {
    return (
        <>
            {/* Icon Blocks */}
            <div className="max-w-7xl mx-auto py-24 lg:py-32 ">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="lg:w-3/4">
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                            Transforming Content Creation with AI
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Whyme.tech revolutionizes content generation for e-commerce, blogs, and SEO with cutting-edge AI technology.
                        </p>
                        <p className="mt-5">
                            <a
                                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                                href="#"
                            >
                                Discover how it works
                                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                            </a>
                        </p>
                    </div>
                    {/* End Col */}
                    <div className="space-y-6 lg:space-y-10">
                        {/* Icon Block */}
                        <div className="flex">
                            {/* Icon */}
                            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                                <BookOpenIcon className="flex-shrink-0 w-5 h-5" />
                            </span>
                            <div className="ms-5 sm:ms-8">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    AI-Powered Content Generation
                                </h3>
                                <p className="mt-1 text-muted-foreground">
                                    Create compelling text for e-commerce, blogs, and SEO effortlessly with our advanced AI tools.
                                </p>
                            </div>
                        </div>
                        {/* End Icon Block */}
                        {/* Icon Block */}
                        <div className="flex">
                            {/* Icon */}
                            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                                <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />
                            </span>
                            <div className="ms-5 sm:ms-8">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    Seamless Integration
                                </h3>
                                <p className="mt-1 text-muted-foreground">
                                    Easily integrate with your existing tools and workflows for a smooth content creation experience.
                                </p>
                            </div>
                        </div>
                        {/* End Icon Block */}
                        {/* Icon Block */}
                        <div className="flex">
                            {/* Icon */}
                            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                                <ThumbsUpIcon className="flex-shrink-0 w-5 h-5" />
                            </span>
                            <div className="ms-5 sm:ms-8">
                                <h3 className="text-base sm:text-lg font-semibold">
                                    Reliable and Scalable
                                </h3>
                                <p className="mt-1 text-muted-foreground">
                                    Trusted by users worldwide for its reliability and ability to scale with your business needs.
                                </p>
                            </div>
                        </div>
                        {/* End Icon Block */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Icon Blocks */}
        </>
    );
}
