import ballerina/http;
// import ballerina/io;
import ballerina/log;

// Attributes associated with the `Listener` endpoint are defined here.
listener http:Listener listen4000 = new(4000);

@http:ServiceConfig { basePath: "/alexmerced" }
service helloWorld on listen4000 {
 
   // All resource functions are invoked with arguments of server connector and request.
   @http:ResourceConfig {
       methods: ["POST"],
       path: "/{name}",
       body: "message"
   }
   resource function sayHello(http:Caller caller, http:Request req, string name, string message) {
       http:Response res = new;
       // A util method that can be used to set string payload.
       res.setPayload("Hello, World! I’m " + <@untainted> name + ". " + <@untainted> message);
       // Sends the response back to the client.
       responder(caller, res);
       
   }
}

function responder(http:Caller caller, http:Response res){
    var result = caller->respond(res);
       if (result is http:ListenerError) {
            error err = result;
            log:printError("Error sending response", err = err);
       }
}