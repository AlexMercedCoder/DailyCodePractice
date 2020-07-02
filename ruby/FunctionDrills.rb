############################
## REVERSE A STRING FUNCTION
############################

def RevString (mystring)
    letters = mystring.split("")
    return letters.reverse().join("")
end

###Test############

puts RevString("Hello")

##########################
## Higher Order Functions (Function Wrappers)
##########################

def calc (x, y, f)
    return method(f).call(x,y) #must pass in symbol into method().call to use callback
end

def add (x,y)
    return x + y
end

def sub (x, y)
    return x-y
end

puts calc(5,5,:add) #Functions must be passed as symbols
puts calc(5,5,:sub)