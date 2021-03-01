package main

import (
	"fmt"
	"strings"
)


func main(){
	fmt.Println(isPalindrom("mom"))
	fmt.Println(isPalindrom("hello world"))
}

func isPalindrom(str string)bool {
	return strings.ToLower(str) == strings.ToLower(reverseString(str))
}

func reverseString(str string) string {
	// Split the String
	theSplit := strings.Split(str, "")
	// fmt.Println(theSplit)

	//create a copy of slice
	cpy := make([]string, len(theSplit))
	copy(cpy, theSplit)
	// fmt.Println(cpy)

	//reverse the slice
	reverseSlice(cpy)
	// fmt.Println(cpy)

	//Join the String
	final := strings.Join(cpy, "")
	// fmt.Println(final)
	return final
}

func reverseSlice(sl []string){
	// loop from the middle
	for i := len(sl)/2-1; i >= 0; i-- {

		// fmt.Println(i)
		
		// swap first and last elements
		opp := len(sl)-1-i
		sl[i], sl[opp] = sl[opp], sl[i]
	}
}