############################
## REVERSE A STRING FUNCTION
############################

def RevString (mystring)
    letters = mystring.split("")
    return letters.reverse().join("")
end

###Test############

puts RevString("Hello")