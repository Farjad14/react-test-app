const fs = require("fs");
const path = require("path");
const babelPath = path.join(__dirname, "../.babelrc.json");
const config = JSON.parse(fs.readFileSync(babelPath, "utf8"));
module.exports = config;