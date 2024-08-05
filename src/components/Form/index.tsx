"use client";

import React from "react";
import AbstractProps from "@/types/AbstractProps";
import "./index.scss";

export interface FormProps extends AbstractProps {}

const Form: React.FC<FormProps> = (props) => {
  return (
    <div className={`form ${props.className ? props.className : ""}`}></div>
  );
};

export default Form;
