import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
const app = express();
const port = 3000;
// Use import.meta.url to get the URL of the current module file
const currentModuleUrl = import.meta.url;

// Convert the module URL to a file path
const currentModulePath = fileURLToPath(currentModuleUrl);

// Use dirname to get the directory name of the module
const currentDirectory = dirname(currentModulePath);
app.get("/", (req, res) => {
  res.sendFile(`${currentDirectory}/template1.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${currentDirectory}/template2.html`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
