import type { Config } from "@jest/types";
// module.exports = {
//   presets: [
//     ["@babel/preset-env", { targets: { node: "current" } }],
//     "@babel/preset-typescript",
//   ],
//   transform: {
//     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
//       "<rootDir>/fileTransformer.js",
//   },
// };

// module.exports = {
//     verbose: true,
//     //setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
//     //moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//     moduleDirectories: ["node_modules", "src"],
//     // moduleNameMapper: {
//     //   "\\.(css|less|scss)$": "identity-obj-proxy"
//     // },
//     transform: {
//       '^.+\\.(ts|tsx)?$': 'ts-jest',
//       "^.+\\.(js|jsx)$": "babel-jest",
//       // "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file.js",
//     },
//     transformIgnorePatterns: [
//       'node_modules/(?!react-markdown/)'
//     ]
//   };
const config: Config.InitialOptions = {
  verbose: false,
  //: "ts-jest",
  // moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  // moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    //"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file.js",
  },
  transformIgnorePatterns: ["node_modules/(?!axios/)"],
  //transformIgnorePatterns: ["node_modules/(?!axios/)"],
};
export default config;
