/* 01.05.2020 */
module.exports = {
    "env": {
        browser: true, // browser global variables.
        commonjs: true,
        node: true, // Node.js global variables and Node.js-specific rules.
        es6: true
    },
    "extends": ["airbnb", "airbnb/hooks"], // 03.06.2020
    "parser": "babel-eslint",
    "parserOptions": {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true
        }
    },
    // plugins: [prettier'],
    "rules": {
        "no-tabs": ["error", { allowIndentationTabs: true }], // 06.03.2020
        "func-names": ["error", "never"], // 06.03.2020
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "never"
        }], // 06.03.2020
        "lines-between-class-members": ["error", "never"], // 06.03.2020
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }], // 06.03.2020
        "max-len": ["error", { "code": 10000 }], // 06.03.2020
        "no-new": 0, // 06.03.2020
        // 'linebreak-style': ['error', 'unix'], // 06.03.2020
        "linebreak-style": 0, // 06.03.2020
        "comma-dangle": ["error",
            {
                "arrays": "never",
                "objects": "never",
                "imports": "never",
                "exports": "never",
                "functions": "never"
            }
        ], // 06.03.2020
        "class-methods-use-this": 0, // 06.03.2020
        "import/extensions": 0, // 06.03.2020
        "object-curly-newline": [
            "error",
            {
                "ImportDeclaration": "never",
                "ExportDeclaration": "never"
            }
        ], // 06.03.2020
        "no-console": ["error",
            {
                "allow": [
                    "warn",
                    "log",
                    "clear",
                    "error"
                ]
            }
        ], // 06.03.2020
        "import/no-useless-path-segments": "off", // 06.03.2020
        "no-trailing-spaces": ["error", { "ignoreComments": true }], // 06.03.2020
        "max-classes-per-file": ["error", 10], // 06.03.2020
        // "quote-props": ["error", "always"], // 06.03.2020
        // "quotes": ["error", "single", { "avoidEscape": true }], // 06.03.2020
        "no-underscore-dangle": ["error", { "allowAfterThis": true }], // 30.05.2020
        // "indent": "off", // 03.06.2020
        "react/prop-types": 0, // 03.06.2020
        "react/destructuring-assignment": 0, // 11.06.2020
        "jsx-a11y/click-events-have-key-events": 0, // 14.06.2020
        "jsx-a11y/no-noninteractive-element-interactions": 0, // 14.06.2020
        "jsx-a11y/label-has-associated-control": 0,
        "react/jsx-fragments": 0,
        "react/jsx-props-no-spreading": 0, // 10.09.2020
        // "react/jsx-indent": [2, "tab"], // 08.10.2020
        "react/jsx-indent": 0, // 17.11.2020
        "react/jsx-indent-props": [2, "tab"], // 08.10.2020
        "consistent-return": 0, // 23.10.2020
        "indent": ["warn", "tab", { "SwitchCase": 1 }], // 25.10.2020
        // "no-console": 0, // 25.10.2020
        // "indent": 0, // 25.10.2020
        // "no-mixed-spaces-and-tabs": 0, // 17.11.2020
        "no-param-reassign": ["error", { "props": false }], // 09.03.2021
    },
    "globals": {
        "$": true,
        "document": true,
        "Highcharts": true,
        "jQuery": true,
        "L": true,
        "moment": true,
        "nouislider": true,
        "pdfMake": true,
        "Swiper": true,
        "window": true
    }
};