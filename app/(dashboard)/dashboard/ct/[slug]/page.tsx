"use client";
import React, { useState } from "react";
import Template from "@/app/(data)/Template";
import FormSection from "@/components/FormSection";
import EditorPart from "@/components/EditorPart";
import { TEMPLATE } from "../../page";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-6 lg:gap-10">
      <main className="py-4 lg:py-4 col-span-1 w-full h-full overflow-hidden">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAiContent(v)}
          loading={loading}
        />
      </main>
      <aside className="h-screen md:full block md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] col-span-2 w-full">
        <ScrollArea className="h-full md:full py-6 pr-6 lg:py-8 prose overflow-y-scroll">
          <EditorPart aioutput={aioutput} loading={loading} />
        </ScrollArea>
      </aside>
    </div>
  );
};

export default OutcomeSection;
