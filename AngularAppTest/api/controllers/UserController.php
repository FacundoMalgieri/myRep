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
		$_SESSION['id_user'] = $array['id_user'];
		$_SESSION['username'] = $array['username'];
		$_SESSION['password'] = $array['password'];
		echo $_SESSION['id_user'];
	}

	public function logout() {
		session_start();
		session_destroy();
		echo "user logged out";
	}

	public function data() {
		session_start();
		if(isset($_SESSION['username'])) {
			echo $_SESSION['username'];
		}
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

