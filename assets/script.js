// add current date to the header
currentDay = $("#currentDay")
  .text(moment().format("[Today is] dddd, MMMM Do YYYY"));


// set timestamps
var eightTimestamp = $("#eightOclock").text(moment().hour(8).minute(0).format("h:mm A"));
var nineTimestamp = $("#nineOclock").text(moment().hour(9).minute(0).format("h:mm A"));
var tenTimestamp = $("#tenOclock").text(moment().hour(10).minute(0).format("h:mm A"));
var elevenTimestamp = $("#elevenOclock").text(moment().hour(11).minute(0).format("h:mm A"));
var twelveTimestamp = $("#twelveOclock").text(moment().hour(12).minute(0).format("h:mm A"));
var oneTimestamp = $("#oneOclock").text(moment().hour(13).minute(0).format("h:mm A"));
var twoTimestamp = $("#twoOclock").text(moment().hour(14).minute(0).format("h:mm A"));
var threeTimestamp = $("#threeOclock").text(moment().hour(15).minute(0).format("h:mm A"));
var fourTimestamp = $("#fourOclock").text(moment().hour(16).minute(0).format("h:mm A"));
var fiveTimestamp = $("#fiveOclock").text(moment().hour(17).minute(0).format("h:mm A"));


// when the save buttons are clicked
function saveEight() {
  var myContentEight = $("#eight").val().trim();
  localStorage.setItem("myContentEight", JSON.stringify(myContentEight));
};

function saveNine() {
  var myContentNine = $("#nine").val().trim();
  localStorage.setItem("myContentNine", JSON.stringify(myContentNine));
};

function saveTen() {
  var myContentTen = $("#ten").val().trim();
  localStorage.setItem("myContentTen", JSON.stringify(myContentTen));
};

function saveEleven() {
  var myContentEleven = $("#eleven").val().trim();
  localStorage.setItem("myContentEleven", JSON.stringify(myContentEleven));
};

function saveTwelve() {
  var myContentTwelve = $("#twelve").val().trim();
  localStorage.setItem("myContentTwelve", JSON.stringify(myContentTwelve));
};

function saveOne() {
  var myContentOne = $("#one").val().trim();
  localStorage.setItem("myContentOne", JSON.stringify(myContentOne));
};

function saveTwo() {
  var myContentTwo = $("#two").val().trim();
  localStorage.setItem("myContentTwo", JSON.stringify(myContentTwo));
};

function saveThree() {
  var myContentThree = $("#three").val().trim();
  localStorage.setItem("myContentThree", JSON.stringify(myContentThree));
};

function saveFour() {
  var myContentFour = $("#four").val().trim();
  localStorage.setItem("myContentFour", JSON.stringify(myContentFour));
};

function saveFive() {
  var myContentFive = $("#five").val().trim();
  localStorage.setItem("myContentFive", JSON.stringify(myContentFive));
};

// loadTasks on refresh
function loadTasks() {
  var myContentEight = JSON.parse(localStorage.getItem("myContentEight"));
  document.getElementById("eight").value = myContentEight;

  var myContentNine = JSON.parse(localStorage.getItem("myContentNine"));
  document.getElementById("nine").value = myContentNine;

  var myContentTen = JSON.parse(localStorage.getItem("myContentTen"));
  document.getElementById("ten").value = myContentTen;

  var myContentEleven = JSON.parse(localStorage.getItem("myContentEleven"));
  document.getElementById("eleven").value = myContentEleven;

  var myContentTwelve = JSON.parse(localStorage.getItem("myContentTwelve"));
  document.getElementById("twelve").value = myContentTwelve;

  var myContentOne = JSON.parse(localStorage.getItem("myContentOne"));
  document.getElementById("one").value = myContentOne;

  var myContentTwo = JSON.parse(localStorage.getItem("myContentTwo"));
  document.getElementById("two").value = myContentTwo;

  var myContentThree = JSON.parse(localStorage.getItem("myContentThree"));
  document.getElementById("three").value = myContentThree;

  var myContentFour = JSON.parse(localStorage.getItem("myContentFour"));
  document.getElementById("four").value = myContentFour;

  var myContentFive = JSON.parse(localStorage.getItem("myContentFive"));
  document.getElementById("five").value = myContentFive;

}

loadTasks();


// highlight textarea depending on time of day
function auditTime() {

  //apply new textarea classes depending on currentTime
  if (moment().isSame(moment().hour(8))) {
    $(".eightOclock").addClass("present");
    $(".eightOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(8).minute(59))) {
    $(".eightOclock").addClass("past");
    $(".eightOclock").removeClass("present future")
  }
  else {
    $(".eightOclock").addClass("future");
    $(".eightOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(9))) {
    $(".nineOclock").addClass("present");
    $(".nineOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(9).minute(59))) {
    $(".nineOclock").addClass("past");
    $(".nineOclock").removeClass("present future")
  }
  else {
    $(".nineOclock").addClass("future");
    $(".nineOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(10))) {
    $(".tenOclock").addClass("present");
    $(".tenOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(10).minute(59))) {
    $(".tenOclock").addClass("past");
    $(".tenOclock").removeClass("present future")
  }
  else {
    $(".tenOclock").addClass("future");
    $(".tenOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(11))) {
    $(".elevenOclock").addClass("present");
    $(".elevenOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(11).minute(59))) {
    $(".elevenOclock").addClass("past");
    $(".elevenOclock").removeClass("present future")
  }
  else {
    $(".elevenOclock").addClass("future");
    $(".elevenOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(12))) {
    $(".twelveOclock").addClass("present");
    $(".twelveOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(12).minute(59))) {
    $(".twelveOclock").addClass("past");
    $(".twelveOclock").removeClass("present future")
  }
  else {
    $(".twelveOclock").addClass("future");
    $(".twelveOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(13))) {
    $(".oneOclock").addClass("present");
    $(".oneOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(13).minute(59))) {
    $(".oneOclock").addClass("past");
    $(".oneOclock").removeClass("present future")
  }
  else {
    $(".oneOclock").addClass("future");
    $(".oneOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(14))) {
    $(".twoOclock").addClass("present");
    $(".twoOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(14).minute(59))) {
    $(".twoOclock").addClass("past");
    $(".twoOclock").removeClass("present future")
  }
  else {
    $(".twoOclock").addClass("future");
    $(".twoOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(15))) {
    $(".threeOclock").addClass("present");
    $(".threeOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(15).minute(59))) {
    $(".threeOclock").addClass("past");
    $(".threeOclock").removeClass("present future")
  }
  else {
    $(".threeOclock").addClass("future");
    $(".threeOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(16))) {
    $(".fourOclock").addClass("present");
    $(".fourOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(16).minute(59))) {
    $(".fourOclock").addClass("past");
    $(".fourOclock").removeClass("present future")
  }
  else {
    $(".fourOclock").addClass("future");
    $(".fourOclock").removeClass("present past")
  };

  if (moment().isSame(moment().hour(17))) {
    $(".fiveOclock").addClass("present");
    $(".fiveOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(17).minute(59))) {
    $(".fiveOclock").addClass("past");
    $(".fiveOclock").removeClass("present future")
  }
  else {
    $(".fiveOclock").addClass("future");
    $(".fiveOclock").removeClass("present past")
  };
}
auditTime();

// auditTime every 1 minute
var checkTime = setInterval(auditTime, 60_000);

