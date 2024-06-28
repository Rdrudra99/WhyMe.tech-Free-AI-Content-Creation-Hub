import React from "react";
import Template from "@/app/(data)/Template";
import Link from "next/link";

export interface TEMPLATE {
    title : string ,
    desc : string ,
    icon : string ,
    category : string ,
    slug : string ,
    prompt : string ,
    form?:FORM[]
}

export interface FORM {
    label : string ,
    field : string ,
    name : string ,
    required?: boolean | undefined;
    options ?: string[]
}



const page = () => {
  return (
    <div>
      {Template.map((item:TEMPLATE, index:number) => {
        return (
          <Link href={`/dashboard/ct/${item?.slug}`} key={index}>
            <h1>{item.title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
