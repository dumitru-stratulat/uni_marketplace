<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client(
    'mongodb+srv://root:root@cluster0.none3.mongodb.net/uni_marketplace'
);
$db = $client->uni_marketplace;
$collection = $db->users;

$email = filter_input(INPUT_GET, 'email' , FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_GET, 'password' , FILTER_SANITIZE_STRING);

$findCriteria = [
    "email" => $email,
    "password" => $password
];

$cursor = $collection->find($findCriteria);

echo json_encode(iterator_to_array($cursor));