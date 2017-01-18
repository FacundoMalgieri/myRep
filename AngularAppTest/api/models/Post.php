<?php namespace models;
use models\ClassToArray;

Class Post extends ClassToArray {
	protected $id_post;
	protected $text;
	protected $date;
	protected $title;
	protected $posted;

	public function __construct($id_post = "", $text = "", $date = "", $title = "", $posted = "") {
		$this->id_post = $id_post;
		$this->text  	= $text;
		$this->date	 	= $date;
		$this->title 	= $title;
		$this->posted 	= $posted;
	}
}