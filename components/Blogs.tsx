"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CornerDownLeft, SpaceIcon, Star, WandSparkles } from "lucide-react";
import highlight from "rehype-highlight";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { ScrollArea } from "./ui/scroll-area";
import Nodata from "./LayoutComponents/Nodata";
import Loader from "./Reuse/Loader";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
const Blogs = () => {
  const [topic, setTopic] = useState("");
  const [seoKeywords, setSeoKeywords] = useState<string[]>([]);
  const [blogContent, setBlogContent] = useState<any>(null); // Change type to any
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          seoKeywords,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setBlogContent(data.blogContent);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (blogContent) {
      navigator.clipboard
        .writeText(blogContent)
        .then(() => {
          alert("Content copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy content: ", err);
        });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row h-full">
      {/* Left Section */}
      <div className="w-full md:w-1/3 md:pr-4 h-full">
        <ScrollArea className="flex items-start gap-8 h-full">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Generate Blog
            </legend>
            <form className="grid w-full gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-3">
                <Label htmlFor="topic">Topic</Label>
                <Input
                  id="topic"
                  type="text"
                  placeholder="Enter blog topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="seoKeywords">SEO Keywords</Label>
                <Textarea
                  id="seoKeywords"
                  placeholder="Enter SEO keywords (comma-separated)"
                  className="min-h-[9.5rem]"
                  value={seoKeywords.join(", ")}
                  onChange={(e) =>
                    setSeoKeywords(
                      e.target.value.split(",").map((keyword) => keyword.trim())
                    )
                  }
                />
              </div>
              <Button type="submit" size="sm" className="ml-auto w-full">
                {loading ? (
                  <p className="flex justify-center items-center space-x-2">
                    <span>
                      <WandSparkles className="h-4 w-4 animate-spin" />
                    </span>
                    <span>Generating...</span>
                  </p>
                ) : (
                  <>
                    <p className="flex justify-center items-center space-x-2">
                      <span>
                        <WandSparkles className="h-4 w-4" />
                      </span>
                      <span>Generate</span>
                    </p>
                  </>
                )}
              </Button>
            </form>
          </fieldset>
        </ScrollArea>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-4 h-full border-l">
        <ScrollArea className="flex p-4 justify-center items-center  h-5/6">
          {loading ? (
            <Loader />
          ) : (
            <>
              {blogContent ? (
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
                    p: ({ node, ...props }) => (
                      <p className="my-2" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc pl-5" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="list-decimal pl-5" {...props} />
                    ),
                  }}
                >
                  {blogContent}
                </ReactMarkdown>
              ) : (
                <Nodata />
              )}
            </>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Blogs;
