module Fire
    def fireball
        p "Fireball"
    end
end

module Ice
    def iceball
        p "iceball"
    end
end

module Weapons
    def sword
        p "swipe"
    end
end

class Wizard
    include Fire
    include Ice
end

class FireKnight
    include Fire
    include Weapons
end

merlin = Wizard.new

arthur = FireKnight.new

merlin.fireball
merlin.iceball
arthur.fireball
arthur.sword