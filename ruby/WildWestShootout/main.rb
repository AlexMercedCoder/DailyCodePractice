require "./classes.rb"

puts "What is your name?"
name = gets.chomp

Player = COWBOY.new(name)
Cleetus = COWBOY.new("Cleetus")


while true do
    puts "Cleetus's Life: #{Cleetus.health} - #{Player.name}'s Life: #{Player.health}"
    puts "Cleetus's Acc: #{Cleetus.accuracy} - #{Player.name}'s Acc: #{Player.accuracy}"
    puts "do you want to [s]hoot or [r]un?"
    input = gets.chomp

    puts input

    if input === "s"
        Player.shoot(Cleetus)
        Cleetus.shoot(Player)
    end
    if input === "r"
        if rand(100) > 60
            puts "You have escaped to fight another day"
            break
        else
            puts "You fail to escapre"
        end
    end
    if Player.health <= 0
        puts "#{Player.name} has been fatally wounded, you lose"
        break
    end
    if Cleetus.health <= 0
        puts "Cleetus has been fatally wounded, you win!"
        break
    end

    
end


