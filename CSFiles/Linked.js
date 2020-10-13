class Node {
  #data = null;
  #prior = null;
  #next = null;

  constructor(prior, data) {
    this.#prior = prior;
    this.#data = data;
  }

  prior() {
    if (this.#prior) {
      return this.#prior;
    } else {
      console.log("No Prior");
    }
  }

  append(data) {
    this.#next = new Node(this, data);
    return this.#next;
  }

  next() {
    if (this.#next) {
      return this.#next;
    } else {
      console.log("No Next Node");
    }
  }

  data() {
    return this.#data;
  }
}

class LinkedList {
  #current = null;
  #nodes = [];

  constructor(initial) {
    this.#current = new Node(null, initial);
    this.#nodes.push(this.#current);
  }

  getCurrent() {
    return this.#current.data();
  }

  addNode(data) {
    this.#nodes.push(this.#nodes[this.#nodes.length - 1].append(data));
  }

  next() {
    this.#current = this.#current.next();
  }

  prior() {
    this.#current = this.#current.prior();
  }
}

const MyList = new LinkedList(1);

MyList.addNode(2);
MyList.addNode(3);
MyList.addNode(4);
MyList.addNode(5);
console.log(MyList.getCurrent());
MyList.next();
console.log(MyList.getCurrent());
MyList.next();
console.log(MyList.getCurrent());
MyList.next();
console.log(MyList.getCurrent());
MyList.next();
console.log(MyList.getCurrent());
MyList.next();
