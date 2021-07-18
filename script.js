//An example of how to do dropdown menus

/*$("#button-container button").on("click", function(event) {
  if (isHidden) {
    hiddenBox.show();
    isHidden=false;
  }else{
    hiddenBox.hide();
    isHidden=true;
  }
});*/

/*window.addEventListener( "load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData( form );

    // Define what happens on successful data submission
    XHR.addEventListener( "load", function(event) {
      alert( event.target.responseText );
    } );

    // Define what happens in case of error
    XHR.addEventListener( "error", function( event ) {
      alert( 'Oops! Something went wrong.' );
    } );

    // Set up our request
    XHR.open( "POST", "https://replit.com/@ZPlumridge/ClubsCalendars#updates.php" );

    // The data sent is what the user provided in the form
    XHR.send( FD );
  }

  // Access the form element...
  const form = document.getElementById( "updateForm" );

  // ...and take over its submit event.
  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
  } );
} );*/

function validateForm() {
  var x = document.forms["updatesForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}