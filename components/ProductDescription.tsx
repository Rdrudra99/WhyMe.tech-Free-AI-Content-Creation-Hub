"use client"
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

import ReactMarkdown from 'react-markdown';
import { CornerDownLeft, Rabbit, Bird, Turtle } from "lucide-react";

const FormData = () => {
  const [productCategory, setProductCategory] = useState("");
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [uniqueSellingPoints, setUniqueSellingPoints] = useState<string[]>([]);
  const [targetAudience, setTargetAudience] = useState("");
  const [seoKeywords, setSeoKeywords] = useState<string[]>([]);
  const [productDescription, setProductDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/ProductDescription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productCategory,
          keyFeatures,
          uniqueSellingPoints,
          targetAudience,
          seoKeywords
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setProductDescription(data.productDescription);
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
      <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0">
          <form className="grid w-full items-start gap-6" onSubmit={handleSubmit}>
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">Product Information</legend>
              <div className="grid gap-3">
                <Label htmlFor="productCategory">Product Category</Label>
                <Input
                  id="productCategory"
                  type="text"
                  placeholder="Enter product category"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="keyFeatures">Key Features</Label>
                <Textarea
                  id="keyFeatures"
                  placeholder="Enter key features (one per line)"
                  className="min-h-[9.5rem]"
                  value={keyFeatures.join("\n")}
                  onChange={(e) => setKeyFeatures(e.target.value.split("\n"))}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="uniqueSellingPoints">Unique Selling Points</Label>
                <Textarea
                  id="uniqueSellingPoints"
                  placeholder="Enter unique selling points (one per line)"
                  className="min-h-[9.5rem]"
                  value={uniqueSellingPoints.join("\n")}
                  onChange={(e) => setUniqueSellingPoints(e.target.value.split("\n"))}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input
                  id="targetAudience"
                  type="text"
                  placeholder="Enter target audience"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="seoKeywords">SEO Keywords</Label>
                <Textarea
                  id="seoKeywords"
                  placeholder="Enter SEO keywords (comma-separated)"
                  className="min-h-[9.5rem]"
                  value={seoKeywords.join(", ")}
                  onChange={(e) => setSeoKeywords(e.target.value.split(", ").map(keyword => keyword.trim()))}
                />
              </div>
            </fieldset>
            <Button type="submit" size="sm" className="ml-auto gap-1.5">
              {loading ? "Loading..." : "Generate Description"}
              <CornerDownLeft className="size-3.5" />
            </Button>
          </form>
        </div>
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/100 p-4 lg:col-span-2">
          {productDescription && (
            <div className="p-4 bg-background rounded-lg border">
              <ReactMarkdown>
                {productDescription}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FormData;
