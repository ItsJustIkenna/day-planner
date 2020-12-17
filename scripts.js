$(document).ready(function () {
  // Dom Variables
  // JavaScript Variables
  var now = moment();
  var dateHeading = $("#currentDay");
  dateHeading.text(now);

  for (hour = 9; hour <= 17; hour++) {
    var index = hour - 9;
    var rowDivEl = $("<div>");
    rowDivEl.addClass("row");
    rowDivEl.addClass("plannerRow");
    rowDivEl.attr("hour-index", hour);

    var timeColEl = $("<div>");
    timeColEl.addClass("col-3");

    var timeBoxSpan = $("<span>");
    timeBoxSpan.attr("class", "timeBox");

    var displayTime = 0;
    var ampm = "";
    if (hour > 12) {
      displayTime = hour - 12;
      ampm = "pm";
    } else {
      displayTime = hour;
      ampm = "am";
    }

    timeBoxSpan.text(displayTime + " " + ampm);
    console.log(timeBoxSpan);

    timeColEl.append(timeBoxSpan);
    rowDivEl.append(timeColEl);
    $("#main").append(rowDivEl);

    var inputEl = $("<input>");
    inputEl.attr("id", "input-" + index);
    inputEl.attr("hour-index", index);
    inputEl.attr("type", "text");
    inputEl.attr("class", "dailyPlan");

    var inputColEl = $("<div>");
    inputColEl.addClass("<col>");

    inputColEl.append(inputEl);
    rowDivEl.append(inputColEl);
  }
  // Function Definitions
  // Function Calls
  // Event Listeners
});
