import { FileIcon } from "lucide-react";
import React from "react";

const Nodata = () => {
  return (
    <div className=" gap-4 h-full w-full text-center flex justify-start items-center flex-col">
        <img src="/emptyState.svg" alt="" className="w-96 h-96" />
        <h2 className="text-2xl font-bold">No data found</h2>
        <p className="text-gray-500">Please try again later</p>
    </div>
  );
};

export default Nodata;
