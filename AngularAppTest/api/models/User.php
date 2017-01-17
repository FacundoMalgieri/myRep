<?php namespace models;
use models\ClassToArray;

Class User extends ClassToArray {
	protected $id_user;
	protected $username;
	protected $password;

	public function __construct($id_user = "", $username = "", $password = "") {
		$this->id_user 	 = $id_user;
		$this->username	 = $username;
		$this->password  = $password;
	}

	public function getUsername() { return $this->username; }
}