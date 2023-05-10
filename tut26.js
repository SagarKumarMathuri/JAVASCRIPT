const fs = require("fs");
const text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("browser", "Sagar");

console.log("The content of the file is");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("Sagar.txt", text);








