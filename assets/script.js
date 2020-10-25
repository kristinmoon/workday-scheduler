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


// var saveTasks = function () {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// // save button was clicked
// $("#eight .saveBtn").click(function () {
//   // get form values
//   var taskText = $(".eightOclock").val();
//   var taskTime = $("#eightOclock").text();

//   //save in tasks array
//   tasks.push({
//     text: taskText,
//     time: taskTime
//   });

//   saveTasks();
//   //}
// })

// var loadTasks = function () {
//   tasks = JSON.parse(localStorage.getItem("tasks"));

//   if (!tasks) {
//     tasks = []
//   };
// }

// loadTasks();

var tasks = []
console.log(typeof tasks)

function mySaveEight() {
  var myContentEight = document.getElementById("eight").value;
  localStorage.setItem("tasks", JSON.stringify(myContentEight));
  tasks.push("myContentEight")
}
function mySaveNine() {
  var myContentNine = document.getElementById("nine").value;
  localStorage.setItem("tasks", JSON.stringify(myContentNine));
  tasks.push("myContentNine")
}

function myLoad() {
  var myContentEight = localStorage.getItem("tasks");
  document.getElementById("eight").value = myContentEight;

  var myContentNine = localStorage.getItem("tasks");
  document.getElementById("nine").value = myContentNine;
}

myLoad();


// highlight textarea depending on time of day
function auditTime() {

  //apply new textarea classes depending on currentTime
  if (moment().isSame(moment().hour(8))) {
    $(".eightOclock").addClass("present");
    $(".eightOclock").removeClass("past future")
  }
  else if (moment().isAfter(moment().hour(9).minute(0))) {
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
  else if (moment().isAfter(moment().hour(10).minute(0))) {
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
  else if (moment().isAfter(moment().hour(11).minute(0))) {
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
  else if (moment().isAfter(moment().hour(12).minute(0))) {
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
  else if (moment().isAfter(moment().hour(13).minute(0))) {
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
  else if (moment().isAfter(moment().hour(14).minute(0))) {
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
  else if (moment().isAfter(moment().hour(15).minute(0))) {
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
  else if (moment().isAfter(moment().hour(16).minute(0))) {
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
  else if (moment().isAfter(moment().hour(17).minute(0))) {
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
  else if (moment().isAfter(moment().hour(18).minute(0))) {
    $(".fiveOclock").addClass("past");
    $(".fiveOclock").removeClass("present future")
  }
  else {
    $(".fiveOclock").addClass("future");
    $(".fiveOclock").removeClass("present past")
  };
}
auditTime();

var checkTime = setInterval(auditTime, 1_800_000);

