// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/rust

fn reverse_words(str:&str) -> String {
    let strings: Vec<String> = str.split(" ").map(|s| s.to_string() ).collect();
    let mut reversed: Vec<String> = Vec::new();
    for s in strings {
        reversed.insert(0,s);
    }
    print!("{:?}", reversed);
    return reversed.join(" ");
}