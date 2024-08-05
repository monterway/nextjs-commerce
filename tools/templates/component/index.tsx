'use client';

import React from 'react';
import AbstractProps from '@/types/AbstractProps';
import './index.scss';

export interface __componentName__(pascalCase)Props extends AbstractProps {}

const __componentName__(pascalCase): React.FC<__componentName__(pascalCase)Props> = (props) => {
    return (
        <div className={`__componentName__(kebabCase) ${props.className ? props.className : ''}`}>
        </div>
    );
};

export default __componentName__(pascalCase);
