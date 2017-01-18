<?php namespace controllers;

use Exception;
use daos\PostDao;
use models\Post;

class PostController {
	private $posts;

	public function __construct() {
		$this->posts = PostDao::getInstance();
	}
	
	public function addPost($data) {
		$data = json_decode(utf8_encode(file_get_contents("php://input")), true);
		$new = new Post(null, $data['text'], null, $data['title'], $data['posted']);
		$this->posts->addPost($new);	 			
	}

	public function allPosts() {
		$list = $this->posts->allPosts();
		$jList = $this->serializeAll($list);
		echo $jList;
	}

	public function delete() {
		$data = json_decode(utf8_encode(file_get_contents("php://input")), true);
		$this->posts->delete($data['id_post']);
	}

	public function serializeAll($data)
	{
		$jList = NULL;
		foreach ($data as $value) {
			$jList[] = $value->toArray(array());	
		}
		$serialized = json_encode($jList);
		return $serialized;
	}
}

