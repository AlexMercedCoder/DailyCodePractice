// declare a struct
struct Dog {
    name: String,
 e  age: i32
}

// declare methods

impl Dog {
    fn bark(&self){
        println!("{} is barking", self.name);
    }
}

fn main() {
    let sparky = Dog{name: String::from("Sparky"), age: 5};

    println!("{} is of age {}", sparky.name, sparky.age);
    sparky.bark();
}

// rustc HelloWorld.rs && ./HelloWorld