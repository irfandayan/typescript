// Commonjs module implementation
//===========================
// const fs = require('fs-extra');
// const path = require('path');

// try {
//   const dir = path.join(__dirname, '../', 'build');
//   console.log(dir);

//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir);
//   }
// } catch (err) {
//   console.error(err);
// }

// ESmodule implementation
//===========================
// Ref:
// https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
// https://stackoverflow.com/questions/64383909/dirname-is-not-defined-in-node-14-version
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Create build folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildDir = path.join(__dirname, '../', 'build');

try {
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
    console.log('build folder created!');
  }
} catch (err) {
  console.error(err);
}

// Create a file named index.js
if (fs.existsSync(buildDir)) {
  fs.appendFile(`${buildDir}/index.js`, '', function (err) {
    if (err) throw err;
    console.log('index.js file created inside build folder!');
  });
}
