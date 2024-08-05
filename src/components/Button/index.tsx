"use client";

import React from "react";
import AbstractProps from "@/types/AbstractProps";
import "./index.scss";

export interface ButtonProps extends AbstractProps {
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`button ${props.className ? props.className : ""}`}
      onClick={props.onPress}
      tabIndex={0}
    >
      {props.label}
    </button>
  );
};

export default Button;
