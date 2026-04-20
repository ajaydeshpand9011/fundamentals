# ------- ------- #
# Conditional Statements
# ------- ------- #
age = 97

# If
if(age >= 18):
    print("Can vote and apply for licence")
    print("Can drive")

# If-else
if(age >= 18):
    print("Can vote and apply for licence")
    print("Can drive")
else:
    print("Not Allowed")

# If-elif-else
light = "yellow"
if(light == "red"):
    print("stop")
elif(light == "green"):
    print("go")
elif(light == "yellow"):
    print("look")
else:
    print("light is broken")
print("End of Code")

# Nested If-else
if(age >= 18):
    if(age >= 80):
        print("Cannot Drive")
    else:
        print("Can Drive")
else:
    print("Cannot Drive")

# ------- ------- #
# String
# ------- ------- #

str1 = "This is a string 1"
print(str1)

str2 = 'This is a string 2'
print(str2)

str3 = """This is python's tutorial"""
print(str3)

str4 = "This is a string 4.\nWe are creating in python"
print(str4)

str5 = "This is a string 5.\tWe are creating in python"
print(str5)

# ------- ------- #
# String Operations
# ------- ------- #

str6 = "Apna"
str7 = "College"

# Concatenation
final = str6 + str7
print(final)

# Indexing
# final[6] = "@" Not-Allowed
print(final[6])

# Slicing
# Forward counting
print(final[1:4])
print(final[4:12])
print(final[:4])    # [0:4]
print(final[5:])    # [5:len(str)]

# Backward counting
print(final[-3:-1])

# ------- ------- #
# String Function
# ------- ------- #

# Length
print(len(final))

# EndsWith
print(final.endswith("e"))

# Capitalize [First Letter Only] [Creates new string]
print(final.capitalize())

# Replace [Creates new string]
print(final.replace("e", "f"))

# Find
print(final.find("a")) 
print(final.find("Q")) # -1

# Count
print(final.count("C"))