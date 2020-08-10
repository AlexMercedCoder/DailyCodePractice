# PURPOSE: To try different ways to call object methods dynamically to better understand how rails macros work

class Random
    def stuff
        puts "Hello World"
    end
end

Bob = Random.new

Bob.instance_eval "stuff" #Instance Eval
Bob.send(:stuff) #send
eval("Bob.#{:stuff}") #eval
Bob.public_send(:stuff) #public_send
Bob.method(:stuff).call #method.call