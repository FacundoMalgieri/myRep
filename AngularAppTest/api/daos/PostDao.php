<?php namespace daos;
use models\Post;
use daos\Connection;

Class PostDao extends Connection {
	protected $table = "posts";
	
	private static $instance = null;

	public static function getInstance() {
		if (self::$instance === NULL) {
			self::$instance = new self();
			}
		return self::$instance;
	}

	public function addPost($value) {
		$sql 	= "INSERT INTO " . $this->table . "(text, date, title, posted) values(:text, NOW(), :title, :posted)";
		$params = $value->toArray(array('date','id_post'));
		$this->execPDO($sql, $params);
	}
	
	public function delete($value) {
		$sql 	= "DELETE FROM " . $this->table . " WHERE id_post = :id_post";
		$params['id_post'] = $value; 
		$this->execPDO($sql, $params);
	}
	
	public function allPosts() {
		$sql   = "SELECT * FROM " . $this->table;
		$stmt  = $this->execPDO($sql);
		$array = $stmt->fetchAll();
		$list  = $this->mapear($array);
		return $list;	
	}
	
	public function mapear($value) { 
		$value = array_map(function($p){	
			return new Post($p['id_post'], $p['text'], $p['date'], $p['title'], $p['posted']);
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

	public function serializeAll($data)	{
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