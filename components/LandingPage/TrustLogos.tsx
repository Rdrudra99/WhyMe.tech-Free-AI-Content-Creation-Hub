import React from "react";
import Image from "next/image";

const TrustLogos = () => {
  return (
    <section className="pt-20">
      <div className="py-14">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <p className="text-muted-foreground text-center text-sm font-semibold">
            Trusted by the best strategic sales teams
          </p>
          <div className="relative mt-12 grid grid-cols-2 justify-items-center gap-12 md:grid-cols-5">
            {[
              {
                alt: "breadcrumb",
                src: "https://www.aomni.com/landing/logos/breadcrumb.svg",
              },
              {
                alt: "amd",
                src: "https://www.aomni.com/landing/logos/attom.svg",
              },
              {
                alt: "altium",
                src: "https://www.aomni.com/landing/logos/attom.svg",
              },
              {
                alt: "attom",
                src: "https://www.aomni.com/landing/logos/breadcrumb.svg",
              },
              {
                alt: "centroid",
                src: "https://www.aomni.com/landing/logos/breadcrumb.svg",
              },
              {
                alt: "one-beyond",
                src: "https://www.aomni.com/landing/logos/attom.svg",
              },
              {
                alt: "magnolia",
                src: "https://www.aomni.com/landing/logos/breadcrumb.svg",
              },
              {
                alt: "convergint",
                src: "https://www.aomni.com/landing/logos/attom.svg",
              },
              {
                alt: "mint",
                src: "https://www.aomni.com/landing/logos/breadcrumb.svg",
              },
              {
                alt: "furiosa",
                src: "https://www.aomni.com/landing/logos/attom.svg",
              },
            ].map((logo, index) => (
              <Image
                key={index}
                alt={logo.alt}
                src={logo.src}
                width={112}
                height={40}
                className="h-10 w-24"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
