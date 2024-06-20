"use client";
// components/FormData.tsx
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import {
  Paperclip,
  Mic,
  CornerDownLeft,
  Turtle,
  Bird,
  Rabbit,
  WandSparkles,
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "./ui/scroll-area";
import Loader from "./Reuse/Loader";
import remarkGfm from "remark-gfm";
import highlight from "rehype-highlight";
import Nodata from "./LayoutComponents/Nodata";

const FormData = () => {
  const [code, setCode] = useState("");
  const [level, setLevel] = useState("");
  const [concept, setConcept] = useState("");
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, level, concept }),
      });
      const data = await res.json();
      if (res.ok) {
        setExplanation(data.explanation);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  console.log(explanation, "rudra");
  return (
    <div className="w-full flex flex-col md:flex-row h-full">
      {/* Left Section */}
      <div className="w-full md:w-1/3 md:pr-4 h-full">
        <ScrollArea className="flex items-start gap-8 h-full">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium text-primary">
              Code Explainer
            </legend>
            <form
              className="grid w-full items-start gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-3">
                <Label htmlFor="model">Level</Label>
                <Select>
                  <SelectTrigger
                    id="model"
                    className="items-start [&_[data-description]]:hidden"
                  >
                    <SelectValue placeholder="Level of explanation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="genesis">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Rabbit className="size-5" />
                        <div className="grid gap-0.5">
                          <p>Begginers</p>
                          <p className="text-xs" data-description>
                            Explain Code for Begginers
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="explorer">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Bird className="size-5" />
                        <div className="grid gap-0.5">
                          <p>Intermidiat</p>
                          <p className="text-xs" data-description>
                            Explain Code for Intermidiat
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="quantum">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Turtle className="size-5" />
                        <div className="grid gap-0.5">
                          <p>Advance</p>
                          <p className="text-xs" data-description>
                            Explain Code for Advance
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="concepts">
                  concepts you want the explanation
                  <span className="text-slate-600">(Optional)</span>
                </Label>
                <Input
                  id="concepts"
                  type="text"
                  placeholder="0.4"
                  onChange={(e) => setConcept(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="content">Code</Label>
                <Textarea
                  id="content"
                  placeholder="Paste Your Code Here ..."
                  className="min-h-[9.5rem]"
                  onChange={(e) => setCode(e.target.value)}
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
        <ScrollArea className="flex p-4 justify-center items-center h-full">
          {loading ? (
            <Loader />
          ) : (
            <>
              {explanation ? (
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
                  {explanation}
                </ReactMarkdown>
              ) : (
                <div className="flex justify-center items-center">
                  <Nodata />
                </div>
              )}
            </>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default FormData;
