"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CornerDownLeft } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import { ScrollArea } from "./ui/scroll-area";
import Nodata from "./LayoutComponents/Nodata";
import Loader from "./Reuse/Loader";
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown'
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
    <ResizablePanelGroup direction="horizontal" className="w-full space-x-5">
      <ResizablePanel defaultSize={40}>
        <ScrollArea className="flex items-start gap-8 md:flex h-full w-full ">
          <form
            className="grid w-full items-start gap-6"
            onSubmit={handleSubmit}
          >
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
            <Button type="submit" size="sm" className="ml-auto gap-1.5 w-full">
              {loading ? "Loading..." : "Generate Blog"}
              <CornerDownLeft className="size-3.5" />
            </Button>
          </form>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <ScrollArea className="flex h-full flex-col px-2 lg:col-span-2 justify-center items-center">
          {loading ? (
            <Loader />
          ) : (
            <>
              {blogContent ? (
                <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
                  {blogContent}
                </ReactMarkdown>
              ) : (
                <Nodata />
              )}
            </>
          )}
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Blogs;
