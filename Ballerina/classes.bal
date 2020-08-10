import ballerina/io;

type Dog object {
    public string name;
    public int age;

    function __init(string name, int age){
        self.name = name;
        self.age = age;
    }
};

public function main(){

    Dog sparky = new("Sparky", 6);
    io:println(sparky.name);

    var results = let int x = 5, int y = x * 5 in y + 5;
    io:println(results);
}