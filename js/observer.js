class ObserveItem {
  constructor(func) {
    this.#func = func;
  }

  subscribe(observer) {
    return this.#func(observer);
  }
}

class ObserveActions {
    constructor(observer){
        if (observer.next){
            this.next = observer.next
        }
        if (observer.error){
            this.error = observer.error
        }
        if (observer.complete){
            this.complete = observer.complete
        }
    }

    next(...args){
        console.log(args)
        return args
    }

    error(...args){
        console.log(args)
        return args
    }

    complete(...args){
        console.log(args)
        return args
    }

}
