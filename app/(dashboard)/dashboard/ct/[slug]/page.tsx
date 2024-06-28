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
    <div className="relative py-4 lg:gap-10 lg:py-4 lg:grid lg:grid-cols-3 h-full">
      {/* Form section part */}
      <div className="mx-auto w-full min-w-0 col-span-1 space-y-4 h-1/2 md:h-full">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAiContent(v)}
          loading={loading}
        />
      </div>
      {/* Editor part */}
      <div className="text-sm xl:block col-span-2 h-1/2 md:h-full">
        <EditorPart aioutput={aioutput} loading={loading} />
      </div>
    </div>
  );
};

export default OutcomeSection;
