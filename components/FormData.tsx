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
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

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
    <div className="flex flex-col h-full">
      <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="relative  flex-col items-start gap-8 md:flex"
          x-chunk="dashboard-03-chunk-0"
        >
          <form
            className="grid w-full items-start gap-6"
            onSubmit={handleSubmit}
          >
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Settings
              </legend>
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
            </fieldset>
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              {loading ? "Loading..." : "Send Message"}
              <CornerDownLeft className="size-3.5" />
            </Button>
          </form>
        </div>

        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/100 p-4 lg:col-span-2">
          {explanation && (
            <div className="p-4 bg-background rounded-lg border">
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
                {explanation}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FormData;
