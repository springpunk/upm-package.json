#!/usr/bin/env node
const path = require("path");
const { writeFile } = require("fs").promises;

const template = {
  name: "com.[my-company].[package-name]",
  version: "1.2.3",
  displayName: "Package Display Name",
  description: "This is an example package",
  unity: "2019.1",
  unityRelease: "0b5",
  documentationUrl: "https://example.com/",
  changelogUrl: "https://example.com/changelog.html",
  licensesUrl: "https://example.com/licensing.html",
  dependencies: {},
  keywords: [],
  author: {
    name: "John Smith",
    email: "john.smith@example.com",
    url: "https://www.example.com",
  },
};

const filePath = path.join(process.cwd(), "package.json");

(async () => {
  console.log("Creating UPM package.json file in the current directory...");
  await writeFile(filePath, JSON.stringify(template)).catch((err) => {
    console.log(err);
    process.exit();
  });
  console.log("Done!");
})();
