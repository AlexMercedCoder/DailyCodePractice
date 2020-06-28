//////////////////////////////
// Create a Linked List Structure
// 6/28/20
// Made up of nodes with link to their prior and next node
// Can traverse from one node back and forth
//////////////////////////////

////////////CLASS/////////////////////

class Node {

    #data = [] //The initial data array as a private field so can't be manipulated outside of class methods

    constructor(parent, value, child){
        this.#data = [parent, value, child]
    }

    set(data){
        this.#data[1] = data //Sets the nodes data
    }

    get(){
        return this.#data[1]
    }

    back(){
        if (this.#data[0] instanceof Node){
            return this.#data[0] //Returns prior node if exists
        } else {
            return this
        }
    }

    next(){
        if(this.#data[2] instanceof Node){
            return this.#data[2] //returns next node, if not creates one
        } else {
            this.#data[2] = new Node(this, null, null)
            return this.#data[2]
        }
    }
}

class LinkedList {
    #mainNode = null
    #currentNode = null
    constructor(){
        this.#mainNode = new Node (null, null, null)
        this.#currentNode = this.#mainNode
    }

    next(){
        this.#currentNode = this.#currentNode.next()
    }

    back(){
        this.#currentNode = this.#currentNode.back()
    }

    set(data){
        return this.#currentNode.set(data)
    }

    get(){
        return this.#currentNode.get()
    }
}


//////////////Example Code////////////////////////

const myList = new LinkedList()

myList.set(1)
myList.next()
myList.set(2)
myList.next()
myList.set(3)
console.log(myList.get())
myList.back()
console.log(myList.get())
myList.back()
console.log(myList.get())