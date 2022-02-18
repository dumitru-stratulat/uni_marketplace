<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client(
    'mongodb+srv://root:root@cluster0.none3.mongodb.net/uni_marketplace'
);
$db = $client->uni_marketplace;
$collection = $db->products;
//getting category 
$category = filter_input(INPUT_GET, 'category' , FILTER_SANITIZE_STRING);
//searching category
$findCriteria = [
    "category" => $category,
];

$cursor = $collection->find($findCriteria);
//iterate respone in json
echo json_encode(iterator_to_array($cursor));