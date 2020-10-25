currentDay = $("#currentDay")
  .text(moment().format("[Today is] dddd, MMMM Do YYYY"));
//console.log(currentDay);

// set timestamps
var eightOclock = $("#eightOclock").text(moment().hour(8).minute(0).format("h:mm A"));
var nineOclock = $("#nineOclock").text(moment().hour(9).minute(0).format("h:mm A"));
var tenOclock = $("#tenOclock").text(moment().hour(10).minute(0).format("h:mm A"));
var elevenOclock = $("#elevenOclock").text(moment().hour(11).minute(0).format("h:mm A"));
var twelveOclock = $("#twelveOclock").text(moment().hour(12).minute(0).format("h:mm A"));
var oneOclock = $("#oneOclock").text(moment().hour(13).minute(0).format("h:mm A"));
var twoOclock = $("#twoOclock").text(moment().hour(14).minute(0).format("h:mm A"));
var threeOclock = $("#threeOclock").text(moment().hour(15).minute(0).format("h:mm A"));
var fourOclock = $("#fourOclock").text(moment().hour(16).minute(0).format("h:mm A"));
var fiveOclock = $("#fiveOclock").text(moment().hour(17).minute(0).format("h:mm A"));







// highlight textarea depending on time of day
function auditTime() {

  // get current time
  currentTime = moment().hour();
  console.log(currentTime)

  //apply new textarea classes depending on currentTime
  if (moment().isSame(moment().hour(8))) {
    $(".eightOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(9).minute(0))) {
    $(".eightOclock").addClass("past");
  }
  else {
    $(".eightOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(9))) {
    $(".nineOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(10).minute(0))) {
    $(".nineOclock").addClass("past");
  }
  else {
    $(".nineOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(10))) {
    $(".tenOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(11).minute(0))) {
    $(".tenOclock").addClass("past");
  }
  else {
    $(".tenOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(11))) {
    $(".elevenOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(12).minute(0))) {
    $(".elevenOclock").addClass("past");
  }
  else {
    $(".elevenOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(12))) {
    $(".twelveOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(13).minute(0))) {
    $(".twelveOclock").addClass("past");
  }
  else {
    $(".twelveOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(13))) {
    $(".oneOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(14).minute(0))) {
    $(".oneOclock").addClass("past");
  }
  else {
    $(".oneOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(14))) {
    $(".twoOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(15).minute(0))) {
    $(".twoOclock").addClass("past");
  }
  else {
    $(".twoOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(15))) {
    $(".threeOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(16).minute(0))) {
    $(".threeOclock").addClass("past");
  }
  else {
    $(".threeOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(16))) {
    $(".fourOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(17).minute(0))) {
    $(".fourOclock").addClass("past");
  }
  else {
    $(".fourOclock").addClass("future");
  };

  if (moment().isSame(moment().hour(17))) {
    $(".fiveOclock").addClass("present");
  }
  else if (moment().isAfter(moment().hour(18).minute(0))) {
    $(".fiveOclock").addClass("past");
  }
  else {
    $(".fiveOclock").addClass("future");
  };
}
console.log(moment().hour())
auditTime();

var tasks = {}