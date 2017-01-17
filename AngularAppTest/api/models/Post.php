<?php namespace models;
use models\ClassToArray;

Class Post extends ClassToArray {
	protected $id_post;
	protected $text;
	protected $date;
	protected $title;

	public function __construct($id_post = "", $text = "", $date = "", $title = "") {
		$this->id_post = $id_post;
		$this->text  	= $text;
		$this->date	 	= $date;
		$this->title 	= $title;
	}
}