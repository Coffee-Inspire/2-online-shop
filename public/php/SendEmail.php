<?php
//this is if you are using different different origins/servers in your localhost, * to be update with the right address when it comes to production
header('Access-Control-Allow-Origin: *');
//this is if you are specifying content-type in your axios request
header("Access-Control-Allow-Headers: Content-Type");

// echo "<pre>";
// print_r($_POST);
// echo "</pre>";

// ini_set("SMTP", "mail.erwinata.com");
// ini_set("smtp_port","465");
// ini_set("sendmail_from", "yoshi@erwinata.com");
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
if(isset($_POST["sendEmail"]) && isset($_POST["email"]) && isset($_POST["subject"]) && isset($_POST["name"]) && isset($_POST["no"]) && isset($_POST["msg"])){
   $to = $_POST["sendEmail"];
   $subject = $_POST["subject"];
   $message = "Name : " . $_POST["name"] . "\n" . "Email : " . $_POST["email"] . "\n" . "No : " . $_POST["no"] . "\n\n" . $_POST["msg"];
   $from = "IFGF Mataram Bot <person1@gmail.com>";
   $headers = "From:" . $from;
   $retval = mail($to,$subject,$message,$headers);
      if( $retval == true )  
      {
         // echo "Message sent successfully...";
         $response = array('msg' => "Message sent successfully...");
         echo json_encode($response);
      }
      else
      {
         $response = array('error' => "Error Cant Send Email !");
         echo json_encode($response);
      }
   }
else{
   $response = array('error' => "Error Cant Send Email !");
   echo json_encode($response);
}
?>