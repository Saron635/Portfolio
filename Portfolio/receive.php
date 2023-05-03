<?php 
include_once 'database.php'; 
if(isset($_POST['save'])) {    
    $name = $_POST['name'];   
    $email = $_POST['email'];   
    $project = $_POST['project'];   
    $message = $_POST['message'];
 
    $sql = "INSERT INTO po (name,email,project,message);   
    VALUES ('$name','$email','$project','$message')";   
    if (mysqli_query($conn, $sql)) {   
        echo "Project sent !";   
    } else {   
        echo "Error: " . $sql . "" . mysqli_error($conn);  
     }   
        mysqli_close($conn); }
?>