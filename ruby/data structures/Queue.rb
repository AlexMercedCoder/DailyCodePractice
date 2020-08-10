##########################################
## Queue Data Structure
##########################################
## 06-29-20/6-30-2020
##########################################

class Queue 
    def initialize
        @que = []
    end

    def enter (data)
        return @que.push data
    end

    def leave
        return @que.shift
    end

    def getQue
        return @que
    end
end

########Example Code##########


LineRide = Queue.new
LineRide.enter(1)
LineRide.enter(2)
LineRide.enter(3)
puts LineRide.getQue
LineRide.leave
puts LineRide.getQue