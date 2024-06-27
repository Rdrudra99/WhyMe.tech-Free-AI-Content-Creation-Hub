import React, { useEffect } from "react";
import { MemoizedReactMarkdown } from "./markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import highlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import Nodata from "./LayoutComponents/Nodata";
import Loader from "./Reuse/Loader";

interface Props {
  aioutput: string;
  loading: boolean;
}

const EditorPart = ({ aioutput, loading }: Props) => {
  return (
    <ScrollArea className="relative flex h-full  flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <Badge variant="outline" className="absolute right-3 top-3">
        Output
      </Badge>
      <div className="flex-1">
        {loading ? (
          <Loader />
        ) : (
          <>
            {aioutput ? (
              <ReactMarkdown
                remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                rehypePlugins={[highlight]}
                components={{
                  code: ({
                    node,
                    inline,
                    className,
                    children,
                    ...props
                  }: any) => {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <pre className="rounded-md p-2 bg-gray-800 text-gray-100 overflow-auto">
                        <code className={`language-${match[1]}`}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl mt-4 mb-2" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl mt-4 mb-2" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl mt-4 mb-2" {...props} />
                  ),
                  p: ({ node, ...props }) => <p className="my-2" {...props} />,
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-5" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-5" {...props} />
                  ),
                }}
              >
                {aioutput}
              </ReactMarkdown>
            ) : (
              <div className="flex justify-center items-center">
                <Nodata />
              </div>
            )}
          </>
        )}
      </div>
    </ScrollArea>
  );
};

export default EditorPart;
