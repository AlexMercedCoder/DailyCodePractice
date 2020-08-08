# ******************************
# TRYING OUT A BLOCK AND YIELD
# ******************************
# def hello (arr)
#     cheese = 5
#     yield cheese
# end

# hello {|myVar| puts myVar}

# ******************************
# Arrays and Each
# ******************************

# myArr = [1,2,3,4,5,6,7]

# myArr.each do |x| 
#     puts x
# end

# ******************************
# Lambdas
# ******************************

# myLambda = -> (x) {x * 2 + 3}

# puts myLambda.call 5


# ******************************
# Lambdas
# ******************************

# myProc = Proc.new {|x,y| puts x + y}

# myProc.call(5,6)


# ******************************
# binding
# ******************************

# def cheese x
#     stuff = x
    
#     binding
# end

# puts cheese(5).eval("stuff")