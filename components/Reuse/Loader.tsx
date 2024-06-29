'use client';

import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton"; // Adjust the import according to your project structure
import { Zap } from "lucide-react";

const Loader = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Thinking...", "Generating...", "Loading..."];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000); // Change text every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length]);

  return (
    <div className="space-y-4 p-4 w-full h-full">
      <div className="flex flex-col items-center justify-center space-y-2 mb-4">
        <span className="text-primary">
          <Zap size={24} className="animate-bounce" />
        </span>
        <span className="text-primary text-sm">{texts[currentTextIndex]}</span>
      </div>
      <Skeleton className="h-8 w-3/4 mb-4" /> {/* Heading Skeleton */}
      <Skeleton className="h-6 w-1/2 mb-2" /> {/* Subheading Skeleton */}
      <Skeleton className="h-4 w-full mb-2" /> {/* Paragraph line */}
      <Skeleton className="h-4 w-5/6 mb-2" /> {/* Paragraph line */}
      <Skeleton className="h-4 w-3/4 mb-2" /> {/* Paragraph line */}
      <Skeleton className="h-4 w-2/3 mb-4" /> {/* Paragraph line */}
      <Skeleton className="h-6 w-1/4 mb-2" /> {/* Bullet point */}
      <Skeleton className="h-6 w-2/4 mb-2" /> {/* Bullet point */}
      <Skeleton className="h-6 w-1/3 mb-2" /> {/* Bullet point */}
      <Skeleton className="h-4 w-full mb-2" /> {/* Paragraph line */}
      <Skeleton className="h-4 w-4/5" /> {/* Paragraph line */}
    </div>
  );
};

export default Loader;
