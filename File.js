const { writeFile } = require("fs");
const fs = require("fs/promises");
var http = require("http");
const { type } = require("os");

const WriteFile = async (filename, fileContent) => {
  try {
    await fs.writeFile(filename, fileContent);
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};
const filename = "index.html";
const fileContent = `
<h1> Hello World </h1>
<p> This is Uday </p>
`;
WriteFile(filename, fileContent);
http
  .createServer(function (req, res) {
    res.writeHead(201,{"Content-type":"text/html"})
    res.write(fileContent);  
      res.end();
  }
  )
  .listen(5000, () => {
    console.log("working");
  });
