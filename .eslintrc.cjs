module.exports = {
    extends: "@becode",
    parser: "@babel/eslint-parser",
    parserOptions: {
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
    },
    "arrow-parens": [0],
    "react/jsx-max-depth": 0,
    parserOptions: {requireConfigFile: "false"},
    babelOptions: {configFile: "./.babelrc"},
};
