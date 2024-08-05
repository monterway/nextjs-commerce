"use client";

import React from "react";
import AbstractProps from "@/types/AbstractProps";
import "./index.scss";

export interface PageProps extends AbstractProps {
  children: React.ReactNode | React.ReactNode[];
}

const Page: React.FC<PageProps> = (props) => {
  return (
    <div className={`page ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};

export default Page;
