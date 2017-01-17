<?php
use php\daos\Connection;
$db_name  = 'angtest';
$hostname = 'localhost';
$username = 'root';
$password = '';

$dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);
$sql = 'SELECT * FROM users';
$stmt = $dbh->prepare( $sql );
$stmt->execute();
$result = $stmt->fetchAll( PDO::FETCH_ASSOC );
$json = json_encode( $result );
echo $json;
