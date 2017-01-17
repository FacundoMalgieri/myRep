<?php namespace controllers;

use Exception;
use daos\UserDao;
use models\User;

class UserController {
	private $users;

	public function __construct() {
		$this->users = UserDao::getInstance();
	}
	
	public function addUser($data) {
		$data = json_decode(utf8_encode(file_get_contents("php://input")), true);
		$new = new User(null,$data['username'], $data['password']);
		if($this->users->addUser($new)) { echo "true"; }
		else { echo "false"; }
	}
	
	public function allUsers() {
		$list = $this->users->allUsers();
		$jList = $this->serializeAll($list);
		echo $jList;
	}

	public function validate($data) {
		$data  = json_decode(utf8_encode(file_get_contents("php://input")), true);
		$array = $this->users->validate($data);
		$array = array_shift($array);
		session_start();
		$_SESSION['id'] = $array['id_user'];
		$jList = json_encode($array);
		echo $jList;
	}

	public function delete() {
		$data = json_decode(utf8_encode(file_get_contents("php://input")), true);
		$this->users->delete($data['id_user']);
	}
	
	public function serializeAll($data) {
		$jList = NULL;
		foreach ($data as $value) {
			$jList[] = $value->toArray(array());	
		}
		$serialized = json_encode($jList);
		return $serialized;
	}
}

