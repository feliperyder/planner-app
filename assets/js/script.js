$(document).ready(function () {

    // Event Listeners
    $(".container").on("click", ".saveBtn", function () {
      // Get the text input and the corresponding hour
      var eventText = $(this).siblings(".description").val();
      var eventHour = $(this).siblings(".hour").text();
      // Save event to local storage
      localStorage.setItem(eventHour, eventText);
    });
  
    // Display current day at the top of the calendar
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY [at] hh:mm A "));
  
    // 1 hour time blocks between 9am-5pm
    function createTimeBlock() {
      var container = $(".container");
  
      // Loop through hours
      for (var hour = 9; hour <= 17; hour++) {
        // create new time block element
        var timeBlock = $("<div>")
          .addClass("row time-block");
        // create hour element
        var hourElement = $("<div>")
          .addClass("col-md-1 hour")
          .text(dayjs().hour(hour).format("hA"));
        // Create text area for event details text to be inputted
        var eventDetails = $("<textarea>")
          .addClass("col-md-15 description");
  
        // Set a class for Color coded time block depending on; past, present, or future
        eventDetails.addClass(
          hour < dayjs().hour() ? "past" : hour === dayjs().hour() ? "present" : "future"
        );
  
        // Create Save button
        var saveBtn = $("<button>")
          .addClass("col-md-1 saveBtn")
          .append($("<i>").addClass("fas fa-save"));
  
        // Append elements to the time block
        timeBlock.append(hourElement, eventDetails, saveBtn);
        // Append the time block to the container with class 'container'
        container.append(timeBlock);
      }
    }
  
    // Call function
    createTimeBlock();
  
    // Load events from local storage
    function loadEvents() {
      $(".time-block").each(function () {
        var hour = $(this).find(".hour").text();
        var savedEvent = localStorage.getItem(hour);
  
        // Set the saved event in the corresponding textarea
        $(this).find(".description").val(savedEvent);
      });
    }
  
    // Call the function to load events
    loadEvents();
  });  