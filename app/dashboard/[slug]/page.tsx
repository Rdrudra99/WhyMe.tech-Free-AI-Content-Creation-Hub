"use client";
import React, { useState } from "react";
import FormSection from "@/components/FormSection";
import Template from "@/app/(data)/Template";
import { LoaderIcon } from "lucide-react";
import { MemoizedReactMarkdown } from "@/components/markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

export interface TEMPLATE {
  title: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  prompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean | undefined;
  options?: string[];
}


interface PROPS {
  params: {
    slug: string;
  };
}
const OutcomeSection = (props: PROPS) => {
  const [aioutput, setAioutput] = useState<string>("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const selectedTemplate: TEMPLATE | undefined = Template?.find(
    (item) => item.slug == props.params.slug
  );

  const generateAiContent = async (formData: any) => {
    const SelectedPrompt = selectedTemplate?.prompt;
    const finalAiPrompt = JSON.stringify(formData) + SelectedPrompt;
    setLoading(true);
    try {
      const response = await fetch("/api/aiContent", {
        method: "POST",
        body: JSON.stringify({ message: finalAiPrompt }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.content);
        setAioutput(data.content);
      } else {
        console.log("Error");
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:flex block">
      <aside className="w-full border-r lg:flex lg:max-w-sm">
        <section className="flex md:min-h-screen w-full shrink-0 flex-col lg:max-h-screen lg:overflow-y-auto">
          <header className="sticky hidden top-0 z-10 md:flex h-16 w-full shrink-0 flex-row items-center gap-4 border-b bg-background px-2 xl:px-7">      
            <h1 className="capitalize">
                {selectedTemplate?.title}
              </h1></header>
          {
            !aioutput ? (
              <div className="flex md:hidden flex-1 flex-col px-2 xl:px-4 md:mt-0 mt-4">
                <FormSection
                  selectedTemplate={selectedTemplate}
                  userFormInput={(v: any) => generateAiContent(v)}
                  loading={loading}
                />
              </div>
            ) : (
              null
            )
          }
          <div className="md:flex flex-1 hidden flex-col px-2 xl:px-4">
            <FormSection
              selectedTemplate={selectedTemplate}
              userFormInput={(v: any) => generateAiContent(v)}
              loading={loading}
            />
          </div>
        </section>
      </aside>
      <div className="flex-1 flex-col lg:flex">
        <section className="flex h-full w-full shrink-0 flex-col lg:max-h-screen lg:overflow-y-auto">
          {
            aioutput ? (
              <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 flex-row items-center gap-4 border-b bg-background px-2 justify-between xl:px-4">
              <a className="inline-flex items-center justify-center space-x-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-9" href={`/dashboard`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></a>
  
              <div className="flex space-x-1">
                <button className="inline-flex items-center justify-center space-x-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-9" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg></button>
                <button className="inline-flex items-center justify-center space-x-1.5 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-9" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg></button>
              </div>
            </header>
            ) : (
              null
            )
          }
          <div className="flex flex-1 flex-col items-center justify-center space-y-4">
            {loading ? (
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center space-x-1.5">
                  <LoaderIcon className="h-4 w-4 animate-spin" />
                  <h1 className="text-xl">WhyMe Is Generating Content</h1>
                </div>
                <p className="text-sm">
                  Loading ....
                </p>
              </div>
            ) : aioutput ? (
              <div className="flex flex-1 flex-col px-2 xl:px-4 ">
                <div className="px-2 py-4 xl:px-3 xl:py-7">
                  <div className="flex-1 flex-col lg:flex">
                    <div className="flex flex-1 flex-col items-center justify-center space-y-4">
                      <MemoizedReactMarkdown
                        className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                        remarkPlugins={[remarkGfm, remarkMath]}
                        components={{
                          p({ children }) {
                            return <p className="mb-2 last:mb-0">{children}</p>
                          },
                        }}
                      >
                        {aioutput}
                      </MemoizedReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-center hidden md:block">
                <div className="flex items-center justify-center space-x-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                  <h1 className="text-xl">Why Me</h1>
                </div>
                <p className="text-sm">Sharing things about Next.js</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OutcomeSection;
