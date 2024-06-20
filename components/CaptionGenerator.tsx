"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ReactMarkdown from "react-markdown";
import { ScrollArea } from "./ui/scroll-area";
import Loader from "./Reuse/Loader";
import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import Nodata from "./LayoutComponents/Nodata";
import { WandSparkles } from "lucide-react";

const CaptionGenerator = () => {
  const [topic, setTopic] = useState("");
  const [mood, setMood] = useState("casual");
  const [language, setLanguage] = useState("English");
  const [caption, setCaption] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/caption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, mood, language }),
      });
      const data = await res.json();
      if (res.ok) {
        setCaption(data.caption);
        console.log(data.caption, "rudra");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="mx-auto w-full min-w-0">
    //   <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-3">
    //     {/* form part */}
    //     <div className="relative flex-col items-start gap-8 md:flex md:col-span-1">
    //       <form
    //         className="grid w-full items-start gap-6"
    //         onSubmit={handleSubmit}
    //       >
    //           <div className="grid gap-3">
    //             <Label htmlFor="topic">Topic</Label>
    //             <Input
    //               id="topic"
    //               type="text"
    //               placeholder="Enter caption topic"
    //               value={topic}
    //               onChange={(e) => setTopic(e.target.value)}
    //             />
    //           </div>
    //           <div className="grid gap-3">
    //             <Label htmlFor="mood">Mood</Label>
    //             <Select>
    //               <SelectTrigger id="mood">
    //                 <SelectValue>{mood}</SelectValue>
    //               </SelectTrigger>
    //               <SelectContent>
    //                 <SelectItem
    //                   value="casual"
    //                   onClick={() => setMood("casual")}
    //                 >
    //                   Casual
    //                 </SelectItem>
    //                 <SelectItem
    //                   value="professional"
    //                   onClick={() => setMood("professional")}
    //                 >
    //                   Professional
    //                 </SelectItem>
    //                 <SelectItem value="adult" onClick={() => setMood("adult")}>
    //                   Adult
    //                 </SelectItem>
    //               </SelectContent>
    //             </Select>
    //           </div>
    //           <div className="grid gap-3">
    //             <Label htmlFor="language">Language</Label>
    //             <Select>
    //               <SelectTrigger id="language">
    //                 <SelectValue>{language}</SelectValue>
    //               </SelectTrigger>
    //               <SelectContent>
    //                 <SelectItem
    //                   value="English"
    //                   onClick={() => setLanguage("English")}
    //                 >
    //                   English
    //                 </SelectItem>
    //                 <SelectItem
    //                   value="Hindi"
    //                   onClick={() => setLanguage("Hindi")}
    //                 >
    //                   Hindi
    //                 </SelectItem>
    //                 <SelectItem
    //                   value="Odia"
    //                   onClick={() => setLanguage("Odia")}
    //                 >
    //                   Odia
    //                 </SelectItem>
    //               </SelectContent>
    //             </Select>
    //           </div>
    //         <Button type="submit" size="sm" className="ml-auto gap-1.5">
    //           {loading ? "Loading..." : "Generate Caption"}
    //         </Button>
    //       </form>
    //     </div>
    //     {/* output part */}
    //     <ScrollArea className="relative flex h-full min-h-[100vh] flex-col bg-muted/50 p-4 md:col-span-2">
    //       {caption && (
    //         <ReactMarkdown
    //           components={{
    //             pre: ({ node, ...props }: any) => (
    //               <div className=" w-full my-2 bg-black/10 p-2 rounded-lg">
    //                 <pre
    //                   {...props}
    //                   className="text-base  text-slate-900  w-full"
    //                 />
    //               </div>
    //             ),
    //             code: ({ node, ...props }: any) => (
    //               <div>
    //                 <code
    //                   {...props}
    //                   className="text-base  bg-black/10 rounded-lg p-1"
    //                 />
    //               </div>
    //             ),
    //           }}
    //         >
    //           {caption}
    //         </ReactMarkdown>
    //       )}
    //       {error && (
    //         <div className="p-4 bg-red-100 text-red-800 rounded-lg border">
    //           <p>{error}</p>
    //         </div>
    //       )}
    //     </ScrollArea>
    //   </main>
    // </div>
    <React.Fragment>
      <div className="w-full flex flex-col md:flex-row h-full">
        {/* Left Section */}
        <div className="w-full md:w-1/3 md:pr-4 h-full">
          <ScrollArea className="flex items-start gap-8 h-full">
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium text-primary">
                Generate Caption
              </legend>
              <form
                className="grid w-full items-start gap-6"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-3">
                  <Label htmlFor="topic">Topic</Label>
                  <Input
                    id="topic"
                    type="text"
                    placeholder="Enter caption topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="mood">Mood</Label>
                  <Select defaultValue="casual">
                    <SelectTrigger id="mood">
                      <SelectValue>{mood}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="casual"
                        onClick={() => setMood("casual")}
                      >
                        Casual
                      </SelectItem>
                      <SelectItem
                        value="professional"
                        onClick={() => setMood("professional")}
                      >
                        Professional
                      </SelectItem>
                      <SelectItem
                        value="adult"
                        onClick={() => setMood("adult")}
                      >
                        Adult
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="English">
                    <SelectTrigger id="language">
                      <SelectValue>{language}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="English"
                        onClick={() => setLanguage("English")}
                      >
                        English
                      </SelectItem>
                      <SelectItem
                        value="Hindi"
                        onClick={() => setLanguage("Hindi")}
                      >
                        Hindi
                      </SelectItem>
                      <SelectItem
                        value="Odia"
                        onClick={() => setLanguage("Odia")}
                      >
                        Odia
                      </SelectItem>
                    </SelectContent>
                  </Select>
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
                {caption ? (
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
                    {caption}
                  </ReactMarkdown>
                ) : (
                  <Nodata />
                )}
              </>
            )}
          </ScrollArea>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CaptionGenerator;
