$(document).ready(function () {

    // Event Listeners

    // Display current day at the top of the calendar
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY [at] hh:mm A "));

    // Time block for 9am-5pm

    // Loop thorugh hours
        // create new time block element
        //create hour element

        //Create text area for event details text to be inputted
    
    // Set a class for Color coded time block depending on; past, present, or future

    // Create Save button

    // Append elements to the time block

    // Append the time block to the container with class 'container'

    // Save event to local storage

    // Load events from local storage
    
      // Call the function to load events
      loadEvents();
    });