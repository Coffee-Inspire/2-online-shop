<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: GET, POST");

//Upload folder
$target_dir = "../uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
  $check = getimagesize($_FILES["image"]["tmp_name"]);
  if($check !== false) {
    if(file_exists($target_file)) {
      chmod($target_file,0755); //Change the file permissions if allowed
      unlink($target_file); //remove the file
    }
  //Move File To Uploads Folder
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
    $message = "The file ". basename( $_FILES["image"]["name"]). " has been uploaded.";
    $url = $target_file;
    $response = array('message' => $message, 'url' => "/uploads/" . basename($_FILES["image"]["name"]));
    echo json_encode($response);
    } else {
    echo "Sorry, there was an error uploading your file.";
    }
    
  } else {
    echo "File is not an image.";
    
  }

?>