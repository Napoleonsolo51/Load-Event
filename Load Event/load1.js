// load.js
// Script to demonstrate the load event. 
var seconds = 0;

// called when the page loads to begin the timer
function startTimer() 
{
   window.setInterval( "updateTime()", 1000 );
} // end function startTimer

// called every 1000 ms to update the timer
function updateTime()
{
   ++seconds;                
   document.getElementById( "soFar" ).innerHTML = seconds;
} // end function updateTime

window.addEventListener( "load", startTimer, false );


/* An event handler is a function that responds to an event. Assigning an event handler to an
event for a DOM node is called registering an event handler. The script registers the window’s load event handler at line 18. Method addEventListener is available
for every DOM node. The method takes three arguments:
• The first is the name of the event for which we’re registering a handler.
• The second is the function that will be called to handle the event.
• The last argument is typically false—the true value is beyond this book’s scope. */