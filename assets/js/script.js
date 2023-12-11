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
      var timeBlock = 
        //create hour element
      var hourElement = 
        //Create text area for event details text to be inputted
      var eventDetails = 
      
    // Set a class for Color coded time block depending on; past, present, or future

    // Create Save button

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