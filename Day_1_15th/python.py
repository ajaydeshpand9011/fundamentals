# ------- ------- #
# Print
# ------- ------- #

print("Hello World")

# ------- ------- #
# Variable
# ------- ------- #

name = "Ajay"
print(name)

# ------- ------- #
# variable declaration keywords 
# ------- ------- #

# Not applicable

# ------- ------- #
# Datatypes
# ------- ------- #

# Primary 
firstName = "Ajay"
print(type(firstName))

price = 23.44
print(type(price))

amount = 2000 
print(type(amount))

isEligible = False
print(type(isEligible))

universe = None
print(type(universe))

# ------- ------- #
# Operators
# ------- ------- #

a = 5
b = 2

# Arithematic
# +, -, *, /, //, %, **

print(a + b)    # addition
print(a - b)    # subtraction
print(a * b)    # multiplicaion
print(a / b)    # division
print(a // b)   # division
print(a % b)    # remainder 
print(a ** b)   # a rasie to b

# Relation/Comparision
# ==, !=, >, <, >=, <=

print(a == b)   # Equal To
print(a != b)   # Not Equal To
print(a > b)    # Greater Than
print(a < b)    # Less Than
print(a >= b)   # Greater Than Eqaul To
print(a <= b)   # Less Than Eqaul To

# Assigment 
# =, +=, -=, *=, /=, %=, **=

num = 10
num += 10
print(num)

num -= 2
print(num)

num *= 2
print(num)

num /= 2
print(num)

num %= 2
print(num)

# Logical
# not, and, or

print("Result 1: ", not (a > b))
print("Result 2: ", a > b and num == 10)
print("Result 3: ", a > b or num == 10)

# ------- ------- #
# Type Conversion
# (Automatic)
# ------- ------- #

# Converts int to float automatically because float is superior
num1 = 2 
num2 = 4.25
sum = num1 + num2
print(sum)

# Converts int to float automatically because float is superior
num7 = "2"
num8 = "444"
sum2 = num7 + num8
print(sum2)

# Cannot add string to float ❌
# sum3 = "2" + 4.25 

# ------- ------- #
# Type Casting
# (Manually)
# ------- ------- #

# Convert str to float
sum3 = float("2") + 4.25 
print(sum3)

# Convert float to int
val = int(4.75)
print(val)   # 4

# Convert int to float
val = float(5)
print(val)   # 5.0

# Tuple, List, Set for future

# ------- ------- #
# Input
# ------- ------- #

userName = input("Enter Your Name: ")
print(userName)

value1 = int(input("Enter some value: "))
print(value1)
print(type(value1))
