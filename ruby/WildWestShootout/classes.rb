class COWBOY 
    def initialize (name)
        @name = name
        @accuracy = rand(10)
        @health = rand(30)
    end
    def name
        return @name
    end
    def accuracy
        return @accuracy
    end
    def health
        return @health
    end
    def damage
        @health -= 5
    end
    def shoot (opp)
        if @accuracy >= rand(10)
            puts "#{@name} successfully shot #{opp.name}"
            opp.damage
        else
            puts "#{@name} missed"
        end
    end
end