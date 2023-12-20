const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

const dateAfterHundredDays = app.get("/", (request, response) => {
  const currentDate = new Date();
  const finalDate = addDays(currentDate, 100);
  const formattedDate = `${finalDate.getDate()}/${
    finalDate.getMonth() + 1
  }/${finalDate.getFullYear()}`;
  response.send(formattedDate);
});

app.listen(3000);

module.exports = dateAfterHundredDays;
