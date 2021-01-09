const fs = require("fs");

const text = fs.readFileSync(process.argv[2], "utf-8");

console.log(text.trim().length);
