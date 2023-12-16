// Initializing an express server
import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import multer from "multer";
import { mergePdfs } from "./mergePdf.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const upload = multer({ dest: "uploadedPDfs/" });

// getting the current directory
const currentModuleUrl = import.meta.url;
const currenModulePath = fileURLToPath(currentModuleUrl);
const currentDirectory = dirname(currenModulePath);

// setting path for static files
app.use("/static", express.static("public"));

//setting path for templates
const templatePath = path.join(currentDirectory, "templates");

// creating routes
app.get("/", (req, res) => {
  //  res.sendFile(path.join(currentDirectory, "templates", "index.html")); // this is also a way of writing it
  res.sendFile(`${templatePath}/index.html`);
});

app.post("/merge", upload.array("pdfs", 5), async (req, res, next) => {
  let data = req.files;
  let pdfName = await mergePdfs(data);
  res.redirect(`http://localhost:3000/static/${pdfName}.pdf`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${templatePath}/about.html`);
});

// Handling 404 req
app.use((req, res, next) => {
  res.status(404).sendFile(`${templatePath}/404.html`);
});
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
