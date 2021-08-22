var nineAm = ("#9am");
var tenAm = ("#10am");
var elevenAm = ("#11am");
var twelvePm = ("#12pm");
var onePm = ("#1pm");
var twoPm = ("#2pm");
var threePm = ("#3pm");
var fourPm = ("#4pm");
var fivePm = ("#5pm");
var sixPm = ("#6pm");
var hourSpan;
var userInput = ""


var currentDate = moment().format("dddd") + moment().format("MMM Do YYYY");
var currentTime = moment().format('h:mm:ss a');
var hour = moment().hours();


function control () {
      
    $(".form-control").each(function () {
        var test = parseInt($(this).attr("id"));
        hour = parseInt(hour);
       
        if (hour > test) {
            $(this).addClass("past");
        } else if (hour < test) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
  }

 function init() {
     
    console.log("Current Hour" + hour)
    var init9am = JSON.parse(localStorage.getItem("9:00am"));
    nineAm.val(init9am);

    var init10am = JSON.parse(localStorage.getItem("10:00am"));
    nineAm.val(init10am);

    var init11am = JSON.parse(localStorage.getItem("11:00am"));
    nineAm.val(init11am);

    var init12pm = JSON.parse(localStorage.getItem("12:00pm"));
    nineAm.val(init12pm);

    var init1pm = JSON.parse(localStorage.getItem("1:00pm"));
    nineAm.val(init1pm);

    var init2pm = JSON.parse(localStorage.getItem("2:00pm"));
    nineAm.val(init2pm);

    var init3pm = JSON.parse(localStorage.getItem("3:00pm"));
    nineAm.val(init3pm);

    var init4pm = JSON.parse(localStorage.getItem("4:00pm"));
    nineAm.val(init4pm);

    var init5pm = JSON.parse(localStorage.getItem("5:00pm"));
    nineAm.val(init5pm);

    var init6pm = JSON.parse(localStorage.getItem("6:00pm"));
    nineAm.val(init6pm);

 }


 $(document).ready(function() {
     control()
     init()
 })

 var interval = setInterval(function() {
     var presentTime = moment();
     $("#currentDay").html(presentTime.format('MMM DD YYYY') + " " + presentTime.format("dddd").substring (0,2).toUpperCase());
     $("#currentDay").html(currentDate + " " + presentTime.format("hh:mm:ss a"));
 }, 100);

 $(".save-btn").on("click", function () {
     userInput = $(this).sibling(".form-ctrl").val().trim();
     console.log(userInput);
 })