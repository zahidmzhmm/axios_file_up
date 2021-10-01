<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if (isset($_FILES['image'])) {
    $name = $_FILES['image']['name'];
    $tmp_name = $_FILES['image']['tmp_name'];
    move_uploaded_file($tmp_name, "uploads/" . $name);
    echo json_encode(['response' => "Success"]);
} else {
    echo json_encode(["response" => "File Upload Error"]);
}
