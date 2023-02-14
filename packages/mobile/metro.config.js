const path = require("path");

// packages/mobile/metro.config.js
module.exports = {
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../../node_modules/@example-app/shared'),
  ],
};