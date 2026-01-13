<!-- <?php
//include "db.php";

//if ($_SERVER["REQUEST_METHOD"] === "POST") {
//
  //  $name    = $_POST["name"];
    //$email   = $_POST["email"];
 /*   $subject = $_POST["subject"];
    $message = $_POST["message"];

    $sql = "INSERT INTO contact_messages (name, email, subject, message)
            VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $email, $subject, $message);

    if ($stmt->execute()) {
        echo "success";
    } else {
        echo "error";
    }

    $stmt->close();
    $conn->close();
}*/
?> -->


<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name    = $_POST["name"] ?? '';
    $email   = $_POST["email"] ?? '';
    $subject = $_POST["subject"] ?? '';
    $message = $_POST["message"] ?? '';

    $sql = "INSERT INTO contact_messages (name, email, subject, message)
            VALUES (?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("ssss", $name, $email, $subject, $message);

    if ($stmt->execute()) {
        echo "success";
    } else {
        echo "Execute failed: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
