const path = require("path");

const mypath = "C:\\Users\\eljan\\OneDrive\\Documents\\certificates";

console.log(path.parse(mypath));
console.log(path.basename(mypath));
console.log(path.join("Home", "Workplace", "abc.txt"));
