module Fire
    def fireball
        puts "fireball"
    end
end

module Ice
    def iceball
        puts "iceball"
    end
end

class Wizard
    include Fire
    include Ice
end

merlin = Wizard.new

merlin.fireball

p "Hello World"