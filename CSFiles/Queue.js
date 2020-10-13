class Queue {
    #data = []
    constructor(initial){
        this.#data.push(initial)
    }

    addToQ(data){
        this.#data.push(data)
    }

    leaveQ(){
        return this.#data.shift()
    }

    inspect(){
        console.log(this.#data)
    }
}

const MyQueue = new Queue(1)

MyQueue.addToQ(2)
MyQueue.addToQ(3)
MyQueue.addToQ(4)
MyQueue.inspect()
console.log(MyQueue.leaveQ())
console.log(MyQueue.leaveQ())
console.log(MyQueue.leaveQ())
console.log(MyQueue.leaveQ())