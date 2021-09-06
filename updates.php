<?php
  // info from : https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data 
  // The global $_POST variable allows you to access the data sent with the POST method by name
  // To access the data sent with the GET method, you can use $_GET
  $say = htmlspecialchars($_POST['say']);
  $to  = htmlspecialchars($_POST['to']);

  echo  $say, ' ', $to;
?>