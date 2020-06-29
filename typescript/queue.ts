//////////////////////////////
// Create a Queue Structure
// 6/29/20
// Add data to the end of the queue, information leaves the front of the queue
//////////////////////////////

////////////CLASS/////////////////////

class Queue {
    #data:Array<any> = []

    enter(data:any){
        return this.#data.push(data)
    }

    leave(){
        return this.#data.shift()
    }

    viewQueue(){
        console.log(this.#data)
    }
}

//////////Example Code///////

const lineRide = new Queue()

lineRide.enter("Susie")
lineRide.enter("Bobby")
lineRide.enter("Ralph")
lineRide.viewQueue()
lineRide.leave()
lineRide.viewQueue()
lineRide.leave()
lineRide.viewQueue()
lineRide.leave()
lineRide.viewQueue()