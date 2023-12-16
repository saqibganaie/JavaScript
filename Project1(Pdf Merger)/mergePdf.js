import PDFMerger from "pdf-merger-js";
var merger = new PDFMerger();

let mergePdfs = async (pdfs) => {
  for (let i = 0; i < pdfs.length; i++) {
    await merger.add(pdfs[i].path);
  }
  //  await merger.add("pdf1.pdf"); //merge all pages. parameter is the path to file and filename.
  //  await merger.add("pdf2.pdf");
  let d = new Date().getTime();
  await merger.save(`./public/${d}.pdf`); //save under given name and reset the internal document
  return d;
};

export { mergePdfs };
