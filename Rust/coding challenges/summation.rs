// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/rust

fn summation(n: i32) -> i32 {
    let mut sum: i32 = 0;
    let mut x: i32 = 0;
    while x <= n {
        sum += x;
        x += 1;
    }
    return sum;
}