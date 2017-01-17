<?php namespace routing;
	
Class Autoload {
  	public static function init() {
    	spl_autoload_register(function($classPath) {
			$class = ROOT . str_replace("\\", "/", $classPath)  . ".php";
			include_once($class);
		});
  	}
}
