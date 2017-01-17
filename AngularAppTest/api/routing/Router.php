<?php namespace routing;

Class Router {
  public static function direct(Request $request) {
    $controller = $request->getController() . 'Controller';
    $method = $request->getMethod();
    $params = $request->getParams();
    
    $show = "controllers\\". $controller;
    $controller = new $show;
    if(!isset($params)) {
      call_user_func(array($controller, $method));
    } else {
      call_user_func_array(array($controller, $method), $params);
    }
  }
}
