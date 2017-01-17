<?php namespace daos;
use models\User;
use daos\Connection;
use PDO;

Class UserDao extends Connection {
	protected $table = "users";
	private static $instance = null;

	public static function getInstance() {
		if (self::$instance === NULL) {
			self::$instance = new self();
			}
		return self::$instance;
	}

	public function addUser($value) {
		$a = $this->validateUser($value->getUsername());
		if(!$a){
			$sql = "INSERT INTO " . $this->table . "(username,password) values(:username,:password)";
			$params = $value->toArray(array('id_user'));
			$this->execPDO($sql, $params);
			return true;
		}
	}
	
	public function delete($value) {
		$sql 	= "DELETE FROM " . $this->table . " WHERE id_user = :id_user";
		$params['id_user'] = $value; 
		$this->execPDO($sql, $params);
	}
	
	public function validate($value) {
		if($this->validateUser($value['username']) && $this->validatePass($value['password'])) {
			$sql    = "SELECT id_user, username, password FROM " . $this->table . " WHERE username = :username AND password = :password";
			$stmt   = $this->execPdo($sql, $value);	
			$array  = $stmt->fetchAll(PDO::FETCH_ASSOC);
			return $array;
		}
	}

	public function validateUser($value) {
		$sql = "SELECT username FROM " . $this->table . " WHERE username = :username";
		$params['username'] = $value;	
		$stmt = $this->execPdo($sql,$params);
		if($stmt->rowCount() > 0) {
			return true;
		}
		return false;
	}

	public function validatePass($value) {
		$sql = "SELECT password FROM " . $this->table . " WHERE password = :password";
		$params['password'] = $value;
		$stmt = $this->execPdo($sql,$params);
		if($stmt->rowCount() > 0) {
			return true;
		}
		return false;
	}
	public function allUsers() {
		$sql   = "SELECT * FROM " . $this->table;
		$stmt  = $this->execPDO($sql);
		$array = $stmt->fetchAll();
		$list  = $this->mapear($array);
		return $list;	
	}
	
	public function mapear($value) { 
		$value = array_map(function($p){	
			return new User($p['id_user'], $p['username'], $p['password']);
			}, $value); 
		return $value;
	}

	private function execPDO($sql, $params = "") {
		$obj_pdo = new Connection();
		$connection = $obj_pdo->connect();
		$stmt = $connection->prepare($sql);
		if(empty($params)) {
			$stmt->execute();
		}
		else {
			$stmt  = $this->autoBind($params, $stmt);
			$stmt->execute($params);
		}
		return $stmt;
	}

	public function serializeAll($data)
	{
		$serialized = json_encode($data);
		return $serialized;
	}

	private function autoBind($params, $stmt) {
		foreach ($params as $key => &$val) {
			$stmt->bindParam(':'. $key, $val);
		}
		return $stmt;
	}
}