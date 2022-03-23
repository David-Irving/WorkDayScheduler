function realtimeClock() {
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    document.getElementById('clock').innerHTML = 
        hours + " : " + minutes + " : " + seconds;
        var t = setTimeout(realtimeClock, 500);
}
var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format("MMM Do YYYY"));
$(".saveBtn").on("click", function() {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

$("#hour6 .description").val(localStorage.getItem("hour6"));
$("#hour7 .description").val(localStorage.getItem("hour7"));
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19"));
$("#hour20 .description").val(localStorage.getItem("hour20"));
$("#hour21 .description").val(localStorage.getItem("hour21"));
$("#hour22 .description").val(localStorage.getItem("hour22"));
$("#hour23 .description").val(localStorage.getItem("hour23"));


function hourTracker() {
    var currentHour = moment().hour(); 
    $(".hourBlock").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    localStorage.setItem(time, description);
    console.log( "at ", time, "you need to", description);
});

hourTracker();
