sample = {"name": "Alex Merced", "age": 35, "email": "alex@alexmerced.dev"}

cheese = {"cheese" + k:"test" + str(v) for (k,v) in sample.items()}

print(cheese)