import ballerina/io;
import ballerina/http;

http:Client jp = new("https://jsonplaceholder.typicode.com"); 

public function main() {

    var response = jp->get("/posts/1");

    var msg = getJson(response);
    
    io:println(msg);
    
}

public function getJson(http:Response|error res) returns @tainted json|http:ClientError{
    return res is http:Response ? res.getJsonPayload() : null;
}