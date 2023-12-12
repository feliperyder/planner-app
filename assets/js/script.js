$(document).ready(function () {
    // Event Listener for save button
    $(".container").on("click", ".saveBtn", function () {
      // Get the text input and the corresponding hour
      var evtText = $(this).siblings(".description").val();
      var evtHour = $(this).siblings(".hour").text();
  
      // Save the event to local storage
      localStorage.setItem(evtHour, evtText);
    });
  
    // Event Listener for clear button
    var clearBtn = $("<button>")
      .addClass("btn btn-danger mt-3")
      .text("Fully clear Schedule")
      .on("click", function () {
        // Clear the local storage
        localStorage.clear();
        // Reload the page to reset the schedule
        location.reload();
      });
  
    // Display current day at the top of the calendar
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY [at] hh:mm A"));
  
    // Function to create time blocks for 9am-5pm
    function createTimeBlock() {
      var container = $(".container");
  
      // Loop through hours from 9am to 5pm
      for (var hr = 9; hr <= 17; hr++) {
        // Create a new time block element
        var timeBlock = $("<div>").addClass("row time-block");
  
        // Create hour element
        var hourElement = $("<div>")
          .addClass("col-md-1 hour")
          .text(dayjs().hour(hr).format("hA"));
  
        // Create textarea for event details
        var eventDetails = $("<textarea>").addClass("col-md-10 description");
  
        // Set the class for past, present, or future based on the current time
        if (hr < dayjs().hour()) {
          eventDetails.addClass("past");
        } else if (hr === dayjs().hour()) {
          eventDetails.addClass("present");
        } else {
          eventDetails.addClass("future");
        }
  
        // Create save button
        var saveBtn = $("<button>")
          .addClass("col-md-1 saveBtn")
          .append($("<i>").addClass("fas fa-save"));
  
        // Append elements to the time block
        timeBlock.append(hourElement, eventDetails, saveBtn);
  
        // Append the time block to the container
        container.append(timeBlock);
      }
    }
  
    // Call the function to create time blocks
    createTimeBlock();
  
    // Append clear button to the container
    $(".container").append(clearBtn);
  
    // Function to load events from local storage
    function loadEvents() {
      $(".time-block").each(function () {
        var hr = $(this).find(".hour").text();
        var savedEvt = localStorage.getItem(hr);
  
        // Set the saved event in the corresponding textarea
        $(this).find(".description").val(savedEvt);
      });
    }
  
    // Call the function to load events
    loadEvents();
  });
  