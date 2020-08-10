import ballerina/io;

public function main() {
    var result = let int x = 5, int y = 4 in x + y;
    io:println(result);
}