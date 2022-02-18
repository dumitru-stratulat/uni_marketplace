
<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client(
    'mongodb+srv://root:root@cluster0.none3.mongodb.net/uni_marketplace'
);
$db = $client->uni_marketplace;
$collection = $db->products;

$query = filter_input(INPUT_GET, 'search' , FILTER_SANITIZE_STRING);
//search criteria
$findCriteria = [
    '$text' => [ '$search' => trim($query)]
];
$cursor = $collection->find($findCriteria);
$array1 = array();
//transforming  bson in json and fom json in php object
foreach ($cursor as $document) {
    $bson = MongoDB\BSON\fromPHP($document);
    $phpobject = json_decode(MongoDB\BSON\toJSON($bson));
    array_push($array1,$phpobject);
};
//send encoded json to front end
echo json_encode($array1);

