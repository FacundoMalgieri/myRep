<?php 

require_once('cfg/Constants.php');
require_once('routing/Autoload.php');

routing\Autoload::init();
routing\Router::direct(new routing\Request());

function pre($value) {
	echo "<pre>";
	print_r($value);
	echo "</pre>";
}

