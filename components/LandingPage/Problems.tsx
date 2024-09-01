import React from "react";

const Problems = () => {
  return (
    <section id="problem">
      <div className="mx-auto max-w-screen-lg px-4 py-16">
        <div className="mx-auto space-y-5 py-6 text-center">
          <h2 className="text-blue-600 font-mono text-[14px] font-medium tracking-tight">
            The Problem
          </h2>
          <h2 className="mx-auto mb-2 max-w-3xl text-balance text-[42px] font-medium leading-tight tracking-tighter">
            Winning requires preparation
          </h2>
        </div>
        <div className="mt-12 flex h-full flex-col items-center justify-between gap-8 text-center md:flex-row md:gap-0">
          <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
            <div className="text-primary mx-auto mb-2 text-4xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-file-search2 size-20 stroke-1"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <circle cx="11.5" cy="14.5" r="2.5"></circle>
                <path d="M13.3 16.3 15 18"></path>
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              Sellers waste valuable hours searching through outdated and
              generic data
            </p>
          </div>
          <div className="mx-4 hidden h-[150px] w-px bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
          <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
            <div className="text-primary mx-auto mb-2 text-4xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-handshake size-20 stroke-1"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                <path d="m21 3 1 11h-2"></path>
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                <path d="M3 4h8"></path>
              </svg>
            </div>
            <p>Cheap automated &quot;personalization&quot; ruins relationships with key buyers</p>
          </div>
          <div className="mx-4 hidden h-[150px] w-px bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
          <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
            <div className="text-primary mx-auto mb-2 text-4xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-target size-20 stroke-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              Deals are harder to get over the finish line than ever before
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
