$(document).ready(function () {
  // Dom Variables
  // JavaScript Variables
  var now = moment();
  var dateHeading = $("#currentDay");
  dateHeading.text(now);

  for (hour = 9; hour <= 17; hour++) {
    var index = hour - 9;
    var rowDivEl = $("<div>");
    rowDivEl.addClass('row');
    rowDivEl.addClass('plannerRow');
    rowDivEl.attr('hour-index', hour);

    var timeBox = $('<div>');
    timeBox.addClass('col-md-2');

    var timeBoxSpan = $('<span>');
    timeBoxSpan.attr('class','timeBox');

    var displayTime = 0;
    var ampm = "";
    if (hour > 12) {
        displayTime = hour - 12;
        ampm = "pm";
    } else {
        displayTime = hour;
        ampm = "am";
    }

    timeBoxSpan.text(displayTime+" "+ampm);
    console.log(timeBoxSpan);

    $("#main").append(rowDivEl);
    rowDivEl.append(timeBox);
    timeBox.append(timeBoxSpan);
  }
  // Function Definitions
  // Function Calls
  // Event Listeners
});
