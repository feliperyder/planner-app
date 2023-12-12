$(document).ready(function () {

    // Event Listeners
    $(".saveBtn").on("click", function () {
    }
    // Display current day at the top of the calendar
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY [at] hh:mm A "));

    // 1 hour time blocks between 9am-5pm
    function TimeBlocks() {
      var container = $(".container");
  
    // Loop thorugh hours
    for (var hour = 9; hour <= 17; hour++)
        // create new time block element
      var timeBlock = $("<div>")
      .addclass("row time-blovk");
        //create hour element
      var hourElement = $("<div>")
      .addclass("col-md-1 hour")
      .txt(dayjs().hour(hour).format("hA"));
        //Create text area for event details text to be inputted
      var eventDetails = $("<textarea>")
      .addclass("col-md-15 description);
      (</textarea>)
      
    // Set a class for Color coded time block depending on; past, present, or future
    eventDetails.addClass(
        hour < dayjs().hour() ? "past" : hour === dayjs().hour() ? "present" : "future"
      );

    // Create Save button
    var saveBtn = $("<button>")
    .addClass("col-md-1 saveBtn")
    .append($("<i>").addClass("fas fa-save"));
    
    // Append elements to the time block

    // Append the time block to the container with class 'container'

    // Save event to local storage
    localStorage.setItem(eventHour, eventText);

    // Load events from local storage
      function loadEvents() {

      }
      // Call the function to load events
      loadEvents();
    });