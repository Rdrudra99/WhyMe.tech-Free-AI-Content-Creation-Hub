"use client";
import React, { useEffect, useState } from "react";
import FormSection from "@/components/FormSection";
import Template from "@/app/(data)/Template";
import { LoaderIcon } from "lucide-react";
import { MemoizedReactMarkdown } from "@/components/markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { cn } from "@/lib/utils";
import { Lobster, Montserrat, Poppins } from "next/font/google";
import Link from "next/link";
import EditorPart from "@/components/EditorPart";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Markdown } from 'tiptap-markdown'; // Import the Markdown extension
import EditorMenubar from "@/components/EditorMenubar";

interface Props {
    aioutput: string;
    loading: boolean;
}
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

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
const OutcomeSection = (props: PROPS) => {
  const [aioutput, setAioutput] = useState<string>("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState<boolean | null>(null);
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
        // console.log(data.content);
        setAioutput(data.content);
        const result = await fetch("/api/pushData", {
          method: "POST",
          body: JSON.stringify({ slug: selectedTemplate?.slug, formData: formData, output: data.content }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // console.log("Error");
      }
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const [markdownOutput, setMarkdownOutput] = useState<string>('');

  const editor = useEditor({
      extensions: [StarterKit, Markdown],
      content: aioutput,
  });

  useEffect(() => {
      if (editor && !loading) {
          editor.commands.setContent(aioutput);
          setMarkdownOutput(editor.storage.markdown.getMarkdown()); // Set markdown output after content is set
      }
  }, [aioutput, loading, editor]);

  const copyAiOutput = async () => {
    try {
      await navigator.clipboard.writeText(aioutput);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };



  return (
    <div className="md:flex block overflow-hidden">
      <aside className="w-full border-r lg:flex lg:max-w-sm">
        <section className="flex md:min-h-screen w-full shrink-0 flex-col lg:max-h-screen lg:overflow-y-auto">
          <header className="sticky hidden top-0 z-10 md:flex h-16 w-full shrink-0 flex-row items-center gap-4 border-b bg-background px-2 xl:px-7">
            {/* <h1 className="capitalize">
              {selectedTemplate?.title}
            </h1> */}
          </header>
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
        <section className="flex h-full w-full shrink-0 flex-col overflow-x-hidden lg:max-h-screen lg:overflow-y-auto">
          {
            aioutput ? (
              <header className="sticky top-0  w-full ">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                <EditorMenubar editor={editor} />
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
              <div className={cn(`flex flex-1 flex-col px-2 xl:px-4 ${poppins.className}`)}>
                <div className="px-2 py-4 xl:px-3 xl:py-7">
                  <div className="flex-1 flex-col lg:flex">
                    <div className="prose flex flex-1 flex-col items-center justify-center space-y-4">
                    <EditorContent editor={editor} />
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
                <p className="text-sm">
                  Start typing to generate AI-powered content tailored to your needs.
                </p>
              </div>
            )}
          </div>
        </section>
      </div >
    </div >
  );
};

export default OutcomeSection;
