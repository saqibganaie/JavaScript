// In this script we saw how to use packages in node js.
// P.S - Just visit npm website and you can download and use any package.

var pdf = require("pdf-node");
var fs = require("fs");

var html = fs.readFileSync("template1.html", "utf8");

var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents: '<div style="text-align: center;">Author: Shyam Hajare</div>',
  },
  footer: {
    height: "28mm",
    contents: {
      first: "Cover page",
      2: "Second page", // Any page number is working. 1-based index
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: "Last Page",
    },
  },
};

var users = [
  {
    name: "tom",
    age: "21",
  },
  {
    name: "dick",
    age: "23",
  },
  {
    name: "harry",
    age: "29",
  },
];
var document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "pdf",
};

pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
