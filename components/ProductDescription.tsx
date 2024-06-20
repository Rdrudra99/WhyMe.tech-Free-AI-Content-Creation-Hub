"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import highlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import { CornerDownLeft, WandSparkles } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import Loader from "./Reuse/Loader";
import remarkGfm from "remark-gfm";
import Nodata from "./LayoutComponents/Nodata";

const FormData = () => {
  const [productCategory, setProductCategory] = useState("");
  const [keyFeatures, setKeyFeatures] = useState<string[]>([]);
  const [uniqueSellingPoints, setUniqueSellingPoints] = useState<string[]>([]);
  const [targetAudience, setTargetAudience] = useState("");
  const [seoKeywords, setSeoKeywords] = useState<string[]>([]);
  const [productDescription, setProductDescription] = useState<string | null>( null);
  const [productTitle, setProductTitlte] = useState("")
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
          seoKeywords,
          productTitle
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
    <div className="w-full flex flex-col md:flex-row h-full">
      {/* Left Section */}
      <div className="w-full md:w-1/3 md:pr-4 h-full">
        <ScrollArea className="flex items-start gap-8 h-full">
          <fieldset className="grid gap-6 rounded-lg border p-4">
            <legend className="-ml-1 px-1 text-sm font-medium text-primary">
              Generate Product Description
            </legend>
            <form
              className="grid w-full items-start gap-6"
              onSubmit={handleSubmit}
            >
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
                <Label htmlFor="productTitle">Product Title</Label>
                <Input
                  id="productTitle"
                  type="text"
                  placeholder="Enter product Title"
                  value={productTitle}
                  onChange={(e) => setProductTitlte(e.target.value)}
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
                <Label htmlFor="uniqueSellingPoints">
                  Unique Selling Points
                </Label>
                <Input
                  id="uniqueSellingPoints"
                  placeholder="Enter unique selling points (one per line)"
                  value={uniqueSellingPoints.join("\n")}
                  onChange={(e) =>
                    setUniqueSellingPoints(e.target.value.split("\n"))
                  }
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
                <Label htmlFor="seoKeywords">Seo Keywords</Label>
                <Input
                  id="seoKeywords"
                  placeholder="Enter SEO keywords (comma-separated)"
                  value={seoKeywords.join(", ")}
                  onChange={(e) =>
                    setSeoKeywords(
                      e.target.value
                        .split(", ")
                        .map((keyword) => keyword.trim())
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
        <ScrollArea className="flex p-4 justify-center items-center h-5/6">
          {loading ? (
            <Loader />
          ) : (
            <>
              {productDescription ? (
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
                  {productDescription}
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
