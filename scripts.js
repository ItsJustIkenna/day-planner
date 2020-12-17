$(document).ready(function () {
  // Dom Variables
  var main = $("#main");
  var dateHeading = $("#currentDay");
  // JavaScript Variables
  var now = moment();
  dateHeading.text(now);

  timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  for (hour = 0; hour < timeArr.length; hour++) {
    var rowEl = $("<div>");
    var btnEl = $("<button>");
    var btnIcon = $("<i>");
    var timeBoxSpanEl = $("<span>");
    var textBoxEl = $("<textarea>");
    
    textBoxEl.addClass("col-md-10 description past");

    rowEl.addClass("row time-block");

    //display the time dynamically
    var displayHour = moment().set("hour", timeArr[hour]).format("hA");
    
    //give time element content
    timeBoxSpanEl.addClass("col-md-1");
    timeBoxSpanEl.text(displayHour);

    //give text element content
    textBoxEl.addClass("textBox");

    //give button element content
    btnEl.addClass("saveBtn col-md-1");
    btnIcon.addClass("far fa-save");
    btnEl.append(btnIcon);

    //append all columns to the row
    rowEl.append(timeBoxSpanEl, textBoxEl, btnEl);
    
    //append row to container
    main.append(rowEl);

    console.log(timeBoxSpanEl[0].innerHTML);
    console.log(textBoxEl);
    console.log(btnEl);
  }

  // Function Definitions
  // Function Calls
  // Event Listeners
  $(".saveBtn").on("click", function () {});
});
