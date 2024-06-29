import React, { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import highlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "./ui/scroll-area";
import Nodata from "./LayoutComponents/Nodata";
import Loader from "./Reuse/Loader";
import { Button } from "./ui/button";
import { CopyIcon, Share } from "lucide-react";
import { Badge } from "./ui/badge";
import { toast, useToast } from "./ui/use-toast";

interface Props {
  aioutput: string;
  loading: boolean;
}

const EditorPart = ({ aioutput, loading }: Props) => {
  const { toast } = useToast()
  const [showButtons, setShowButtons] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(aioutput);
    toast({
      title: "Copy Ho Gaya Hai  😄",
      description: "Abb jaldi Se kahi Paste Kar De",
    });
  };
  

  const handleShare = () => {

  }



  return (
    <div className="h-full w-full">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <Loader />
        </div>
      ) : aioutput ? (
        <aside
          className="top-14 z-30 h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block"
          onMouseEnter={() => setShowButtons(true)}
          onMouseLeave={() => setShowButtons(false)}
        >
          <ScrollArea className="h-full px-4">
            <div
              className={`flex justify-end space-x-2 ${
                showButtons ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 absolute top-0 right-0 mt-2 mr-2`}
            >
              <Button size={"icon"} variant={"default"} onClick={handleCopy}>
                <CopyIcon className="w-4 h-4" />
              </Button>
              <Button size={"icon"} variant={"default"} onClick={handleShare}>
                <Share className="w-4 h-4" />
              </Button>
            </div>
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
                    <pre className="rounded-sm p-2 bg-muted-background font-thin italic border overflow-auto">
                      <code className={`language-${match[1]}`}>{children}</code>
                    </pre>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-2xl italic font-mono mt-4 mb-2 text-primary"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl mt-4 mb-2" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-lg mt-4 mb-2" {...props} />
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
          </ScrollArea>
        </aside>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <Nodata />
        </div>
      )}
    </div>
  );
};

export default EditorPart;
