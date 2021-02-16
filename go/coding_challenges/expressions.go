// codewars.com/kata/5ae62fcf252e66d44d00008e/train/go

package kata

import (
  "fmt"
  "sort"
)

func ExpressionMatter(a int, b int, c int) int {
    expr := []int{a + b * c, (a + b) * c, a * b + c, a * (b + c), a * b * c, a + b + c }
    sort.Ints(expr)
    fmt.Println(expr)
    return expr[5]
}