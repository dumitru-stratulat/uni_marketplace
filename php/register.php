
<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client(
    'mongodb+srv://root:root@cluster0.none3.mongodb.net/uni_marketplace'
);
$db = $client->uni_marketplace;
$collection = $db->users;
//getting email username and password from frontend
$email = filter_input(INPUT_POST, 'email' , FILTER_SANITIZE_STRING);
$username = filter_input(INPUT_POST, 'username' , FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'password' , FILTER_SANITIZE_STRING);
$dataArray = [
    "username" => $username,
    "email" => $email,
    "password" => $password
];
//inserting document
$collection->insertOne($dataArray);