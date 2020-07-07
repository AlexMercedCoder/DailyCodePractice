///////////////////////////////////
// Queue Data Structure
//////////////////////////////////
// 7-7-2020

package main

import "fmt"

//Create Queue Struct
type Queue struct {
	data []int
}

//Queue Methods, pointer methods so it mutates the Queue
func (q *Queue) enter(n int){
	q.data = append(q.data, n)
}

func (q *Queue) leave(){
	q.data = q.data[1:]
}

func main(){
	var myLine = Queue{[]int{}}
	myLine.enter(1)
	myLine.enter(2)
	myLine.enter(3)
	fmt.Println(myLine.data)
	myLine.leave()
	fmt.Println(myLine.data)
	
}
