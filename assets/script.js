currentDay = $("#currentDay")
  .text(moment().format("[Today is] dddd, MMMM Do YYYY"));
//console.log(currentDay);

// set timestamps
eightOclock = $("#eightOclock")
  .text(moment().hour(8).minute(0).format("h:mm A"));

eightOclock = $("#nineOclock")
  .text(moment().hour(9).minute(0).format("h:mm A"));

eightOclock = $("#tenOclock")
  .text(moment().hour(10).minute(0).format("h:mm A"));

eightOclock = $("#elevenOclock")
  .text(moment().hour(11).minute(0).format("h:mm A"));

eightOclock = $("#twelveOclock")
  .text(moment().hour(12).minute(0).format("h:mm A"));

eightOclock = $("#oneOclock")
  .text(moment().hour(13).minute(0).format("h:mm A"));

eightOclock = $("#twoOclock")
  .text(moment().hour(14).minute(0).format("h:mm A"));

eightOclock = $("#threeOclock")
  .text(moment().hour(15).minute(0).format("h:mm A"));

eightOclock = $("#fourOclock")
  .text(moment().hour(16).minute(0).format("h:mm A"));

eightOclock = $("#fiveOclock")
  .text(moment().hour(17).minute(0).format("h:mm A"));


var tasks = {}