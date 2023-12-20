const date = require("date-fns");

const { addDays, format } = date;

function getDaysAfterXDays(noOfDays) {
  const resultDays = addDays(new Date("22 Aug 2020"), noOfDays);
  const formattedDays = `${resultDays.getDate()}-${
    resultDays.getMonth() + 1
  }-${resultDays.getFullYear()}`;
  return formattedDays;
}

module.exports = getDaysAfterXDays;
