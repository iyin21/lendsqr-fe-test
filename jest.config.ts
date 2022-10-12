import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: false,
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    //"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file.js",
  },
  transformIgnorePatterns: ["node_modules/(?!axios/)"],
  
};
export default config;
