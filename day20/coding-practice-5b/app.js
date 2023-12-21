const express = require("express");
const app = express();

const todayDate = app.get("/", (request, response) => {
  const date = new Date();
  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  response.send(formattedDate);
});

app.listen(3000);

module.exports = todayDate;
