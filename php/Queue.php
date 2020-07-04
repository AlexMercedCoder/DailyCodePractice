<!-- ###################################
##### PHP Queue Data Structure
###################################
##### July 4th, 2020
################################### -->


<?php

class Queue {
    public function __construct(){
        $this->data = [];
    }

    public function enter ($new) {
        $this->data[] = $new;
    }

    public function leave(){
       array_shift($this->data); 
    }

    public function current(){
        return $this->data;
    }
}

$myLine = new Queue();

$myLine->enter(1);
$myLine->enter(2);
$myLine->enter(3);
var_dump($myLine->current());
$myLine->leave();
var_dump($myLine->current());

?>