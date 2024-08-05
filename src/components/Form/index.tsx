'use client';

import React from "react";
import AbstractProps from "@/types/AbstractProps";
import './index.scss';
import Button from "@/components/Button";

export interface FormProps extends AbstractProps {}

const Form: React.FC<FormProps> = (props) => {
    return (
        <div className={`form ${props.className ? props.className : ''}`}>
            <Button
                label="Test"
                onPress={() => console.log("Test")}
            />
            <Button
                label="Test"
                onPress={() => console.log("Test")}
            />
        </div>
    );
};

export default Form;
