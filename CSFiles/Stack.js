class Stack {
  #data = [];

  constructor(initial) {
    this.#data.push(initial);
  }

  push(data) {
    this.#data.push(data);
  }

  pop() {
    return this.#data.pop();
  }

  inspect() {
    console.log(this.#data);
  }
}

const MyStack = new Stack(1);

MyStack.push(2);
MyStack.push(3);
MyStack.push(4);
MyStack.inspect()
console.log(MyStack.pop());
console.log(MyStack.pop());
console.log(MyStack.pop());
console.log(MyStack.pop());