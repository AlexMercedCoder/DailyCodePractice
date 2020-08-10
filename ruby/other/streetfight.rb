class Fighter
    def initialize (name)
        @name = name
        @power = rand(20)
        @defense = rand(10)
        @life = rand(30)
    end
    def defense
        @defense
    end
    def name
        @name
    end
    def life
        @life
    end
    def damage (dmg)
        @life -= dmg
    end
    def fight(opp)
        damage = rand(@power) - opp.defense
        damage = damage > 0 ? damage : 0
        opp.damage(damage)
        puts "#{@name} has done #{damage} damage to #{opp.name}"

    end    
end

Ryu = Fighter.new("Ryu")
Ken = Fighter.new("Ken")

while true do
    Ryu.fight(Ken)
    Ken.fight(Ryu)

    if Ken.life <= 0
        puts "Ken is Dead"
        break
    end
    if Ryu.life <= 0
        puts "Ken is Dead"
        break
    end

end