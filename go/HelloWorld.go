package main

import "fmt"

//Define a struct
type Dog struct {
	name string
	age int
}

// Struct Method
func (dog Dog) bark(){
	fmt.Printf(dog.name + " barks.")
}

func main(){
	sparky := Dog{"Sparky", 5}
	sparky.bark()
}