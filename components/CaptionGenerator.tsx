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
    <div className="flex flex-col h-full">
      <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-3">
        {/* form part */}
        <div className="relative flex-col items-start gap-8 md:flex md:col-span-1">
          <form
            className="grid w-full items-start gap-6"
            onSubmit={handleSubmit}
          >
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Caption Generator
              </legend>
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
                <Select>
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
                    <SelectItem value="adult" onClick={() => setMood("adult")}>
                      Adult
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="language">Language</Label>
                <Select>
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
            </fieldset>
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              {loading ? "Loading..." : "Generate Caption"}
            </Button>
          </form>
        </div>
        {/* output part */}
        <ScrollArea className="relative flex h-full min-h-[100vh] flex-col bg-muted/50 p-4 md:col-span-2">
          {caption && (
            <ReactMarkdown
              components={{
                pre: ({ node, ...props }: any) => (
                  <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                    <pre
                      {...props}
                      className="text-sm font-mono text-slate-900 overflow-auto w-full"
                    />
                  </div>
                ),
                code: ({ node, ...props }: any) => (
                  <div>
                    <code
                      {...props}
                      className="text-sm font-mono bg-black/10 rounded-lg p-1"
                    />
                  </div>
                ),
              }}
            >
              {caption}
            </ReactMarkdown>
          )}
          {error && (
            <div className="p-4 bg-red-100 text-red-800 rounded-lg border">
              <p>{error}</p>
            </div>
          )}
        </ScrollArea>
      </main>
    </div>
  );
};

export default CaptionGenerator;
