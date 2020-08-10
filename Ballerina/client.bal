	
import ballerina/http;
import ballerina/io;
http:Client jp = new ("https://jsonplaceholder.typicode.com");

public function main() {

    var response = jp->get("/posts/1");
    handleResponse(response);
    if (response is http:Response){
        io:println(response.getJsonPayload());
    }

}

function printJson (http:Response|error response){
    
}

function handleResponse(http:Response|error response) {
    if (response is http:Response) {
        var msg = response.getJsonPayload();
        if (msg is json) {

            io:println(msg.toJsonString());
        } else {
            io:println("Invalid payload received:", msg.reason());
        }
    } else {
        io:println("Error when calling the backend: ",
                                    response.detail()?.message);
    }
}