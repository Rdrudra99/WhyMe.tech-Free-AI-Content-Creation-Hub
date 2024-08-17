"use client"
import React from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
  const placeholders = [
    "Generate compelling product descriptions effortlessly",
    "Optimize your product titles for better search engine rankings",
    "Monitor prices and analyze competitors to stay competitive",
    "Generate catchy titles for your blog posts",
    "Automatically generate code snippets for various programming tasks",
    "Generate relevant keywords to improve your SEO strategy",
    "Create compelling subject lines to boost email open rates",
    "Generate creative ideas for your social media posts",
    "Generate effective ad copies for your advertising campaigns",
    "Rewrite text while retaining its original meaning"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("submitted");
  };
  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          {children}
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p className="mb-8 text-3xl font-semibold leading-10">Our AI content generator website delivers high-quality content faster than any competitor. While others are mired in technical debt, we&apos;re continuously innovating with new features.</p>
          <p className="mb-4 text-3xl font-semibold">Kya Re Rudra</p>
          <p className="">Founder, whyme</p>
          <p className="mb-7 text-sm opacity-70">AI Content Generator</p>
        </div>

        <img className="-z-1 absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </div>
    </div>


  );
};

export default layout;
