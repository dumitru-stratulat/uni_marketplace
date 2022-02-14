
<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client(
    'mongodb+srv://root:root@cluster0.none3.mongodb.net/uni_marketplace'
);
$db = $client->uni_marketplace;
$collection = $db->products;
$cursor = $collection->find();

echo json_encode(iterator_to_array($cursor));
