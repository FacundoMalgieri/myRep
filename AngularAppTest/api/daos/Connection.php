<?php namespace daos;
use Exception;
use PDO;

Class Connection {    
  public function connect() {
    return new PDO("mysql:host=" . DB_HOST . "; dbname=" . DB_NAME, DB_USER, DB_PASS);
    try {
    	throw new Exception('Exception Captured.');
    }
    catch(Exception $e) {
    	var_dump($e->getMessage());
    }
  }
}


