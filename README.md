# ES6-Vitejs
Assignment - ECMA Fall2022
# Setting up the ECMA subject environment
1) Vanilla
- npm init vite@latest my-app -- -- template vanilla
- cd my-app
- npm install
- code .
2) Eslint
- npm install eslint --save-dev
- npx eslint --init
  (answer eslint's question)
  1) To check syntax, find problems, and enforce code style
  2) JavaScript modules (import/export)
  3) None of these
  4) No
  5) Node
  6) Use a popular style guide
  7) Airbnb: https://github.com/airbnb/javascript
  8) JavaScript
  9) Yes
- Install the extension (in VScode)
- Auto-save and check : Ctrl + Shift + P --> Open Setting JSON
  Enter : 
    "editor.codeActionsOnSave":{
        "source.fixAll.eslint":true
    },
- More rules for checking eslint
  Enter :
  rules: {
    semi: ['error','always'],
    quotes: ['error', 'double', { allowTemplateLiterals: true }],
    indent: ['error', 4],
    'eol-last': ['error', 'never'],
  },
