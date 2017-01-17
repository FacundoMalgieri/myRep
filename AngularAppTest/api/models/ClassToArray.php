<?php namespace models;

abstract Class ClassToArray {
		public function toArray($excludedParams = null) {
		$result = array();
		$checkExcluded = (!is_null($excludedParams)) ? true : false;
		foreach ($this as $atribute => $value) {
			if ($checkExcluded) {
				if (!in_array($atribute, $excludedParams))
					$result[$atribute] = $value;
			}
			else
				$result[$atribute] = $value;
		}

		return $result;
	}

}