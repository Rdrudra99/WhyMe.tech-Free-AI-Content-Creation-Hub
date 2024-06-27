"use client";
import React, { useState } from "react";
import { TEMPLATE } from "@/app/dashboard/page";
import Template from "@/app/(data)/Template";
import FormSection from "@/components/FormSection";
import EditorPart from "@/components/EditorPart";

interface PROPS {
  params: {
    slug: string;
  };
}
const OutcomeSection = (props: PROPS) => {
  const [aioutput , setAioutput] = useState<string>("");
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
    } catch (error:any) {
      setError(error);
    }
    finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="w-full flex flex-col md:flex-row h-full">
      {/* Left Section */}
      <div className="w-full md:w-1/3 md:pr-4 h-full">
        <div className="flex items-start gap-8 h-full">
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => generateAiContent(v)}
            loading={loading}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 mt-4 md:mt-0 md:pl-4 h-full">
        <EditorPart aioutput={aioutput} />
      </div>
    </div>
  );
};

export default OutcomeSection;
