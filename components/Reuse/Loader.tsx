import React from "react";
import { Skeleton } from "../ui/skeleton"; // Adjust the import according to your project structure

const Loader = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/3" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/3" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/3" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/3" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
};

export default Loader;
