import { FileIcon } from "lucide-react";
import React from "react";

const Nodata = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-full text-center">
    <FileIcon className="text-muted-foreground h-16 w-16" />
    <h3 className="text-2xl font-bold">No data found</h3>
    <p className="text-muted-foreground">
      It looks like there is no data available at the moment.
    </p>
  </div>
  );
};

export default Nodata;
