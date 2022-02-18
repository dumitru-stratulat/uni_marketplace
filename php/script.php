
<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client(
    'mongodb+srv://root:root@cluster0.none3.mongodb.net/uni_marketplace'
);
$db = $client->uni_marketplace;
$collection = $db->products;
$cursor = $collection->find();

echo json_encode(iterator_to_array($cursor));




/*
Adesh
<?php
require 'vendor/autoload.php'; // include Composer's autoloader

$client = new MongoDB\Client(
    'mongodb+srv://root:root@cluster0.none3.mongodb.net/uni_marketplace'
);

$search = filter_input(INPUT_POST, 'search' , FILTER_SANITIZE_STRING);

$db = $client->uni_marketplace;
$collection = $db->products;

$findCriteria = [];

if(isset($search) && $search != ''){
	$findCriteria = [*/
	//	"title" => "/.*".$search.".*/"
	/*];
}

$cursor = $collection->find(array(
    'title' => new \MongoDB\BSON\Regex($search,"i")
));


echo json_encode(iterator_to_array($cursor));*/

