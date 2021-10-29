const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.render("index.js", { name: "Junior" });
});

app.listen(3000);
