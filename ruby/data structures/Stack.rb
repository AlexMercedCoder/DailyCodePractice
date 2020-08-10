##########################################
## Stack Data Structure
##########################################
## 6-30-2020
##########################################

class Stack
    def initialize
        @data = []
    end

    def push (data)
        return @data.push data
    end

    def pop
        return @data.pop
    end

    def getStack
        return @data
    end
end

########Example Code##########


PileOfPapers = Stack.new

PileOfPapers.push 1
PileOfPapers.push 2
PileOfPapers.push 3
puts PileOfPapers.getStack
PileOfPapers.pop
puts PileOfPapers.getStack