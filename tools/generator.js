const { generateTemplateFiles } = require("generate-template-files");

generateTemplateFiles([
  {
    option: "SCSS file",
    defaultCase: "(pascalCase)",
    entry: {
      folderPath: "./tools/templates/component/index.scss",
    },
    stringReplacers: [
      {
        question: "Component name?",
        slot: "__componentName__",
      },
    ],
    output: {
      path: `./src/components/__componentName__/index.scss`,
    },
  },
  {
    option: "JSX file",
    defaultCase: "(pascalCase)",
    entry: {
      folderPath: "./tools/templates/component/index.tsx",
    },
    stringReplacers: [
      {
        question: "Component name?",
        slot: "__componentName__",
      },
    ],
    output: {
      path: `./src/components/__componentName__/index.tsx`,
    },
  },
]);
