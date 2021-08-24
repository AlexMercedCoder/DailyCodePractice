// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/rust

fn find_smallest_int(arr: &[i32]) -> i32 {
    print!("{:?}", arr);
    let mut v: Vec<i32> = arr.iter().cloned().collect();
    v.sort();
    print!("{:?}", v);
    return v[0];
}