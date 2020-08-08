class Dog
    def initialize
        @name = :Spot
    end
    def name
        @name
    end
end

Spot = Dog.new

puts Spot.name