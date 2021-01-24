//////////////////////////////
// Create a Stack Structure
// 6/28/20
// Should be able to push data on top of stack
// Pop data from top of stack
//////////////////////////////

////////////CLASS/////////////////////

class Stack {
    #data = [];

    constructor(data) {
        if (data instanceof Array) {
            this.#data = [...data]; //can pass initial array for initial data
        }
        //Data is setup as private class field (#) so users can't access inner array directly, only through class methods
    }

    push(value) {
        this.#data.push(value); //add data to end of data
    }

    pop() {
        this.#data.pop(); //remove last item from data
    }

    inspect() {
        return this.#data; //getter function for data
    }
}

//////////////////////////////////////

/////////TEST CODE/////////////////////

const myStack = new Stack([1, 2, 3, 4, 5]);

console.log(myStack.inspect()); //Show the initial stack of the stack

myStack.pop(); //remove value from stack
myStack.push(6); // add value to stack

console.log(myStack.inspect()); //show final state of Stack

const emptyStack = new Stack(6); //show what happens if pass in non-array value

console.log(emptyStack.inspect());

///////////////////////////////////////
