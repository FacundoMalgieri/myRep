<?php namespace routing;

Class Request {
  private $controller;
  private $method;
  private $params = [];
  
  public function __construct() {
    $methodRequest = $this->getMethodRequest();
    $url = filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL);
    $urlToArray = explode("/", $url);
    $ArrayUrl = array_filter($urlToArray);
    
    if(empty($ArrayUrl)) {
      $this->controller = 'User';
    } 
    else {
      $this->controller = ucwords(array_shift($ArrayUrl));
    }
    
    if(empty($ArrayUrl)) {
      $this->method = 'allUsers';
    } 
    else {                    
      $this->method = array_shift($ArrayUrl);
    }
    if($methodRequest == 'GET') {
      if(!empty($ArrayUrl)) {
        $this->params[] = $ArrayUrl;
      }
    }
    else {
      $this->params[] = $_POST;
    }            
  }

  public static function getMethodRequest() {
      return $_SERVER['REQUEST_METHOD'];
  }

  public function getController() {
      return $this->controller;
  }
  
  public function getMethod() {
      return $this->method;
  }
  
  public function getParams() {
      return $this->params;
  }
}