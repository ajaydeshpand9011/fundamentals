# ------- ------- #
# List - Arrays
# ------- ------- #

marks1 = 94.4
marks2 = 87.5
marks3 = 95.2
marks4 = 66.4
marks5 = 45.1

marks = [94.4, 87.5, 95.2, 66.4, 45.1]

# Printing
print(marks)

# Indexing
print(marks[2])

# Length
print(len(marks))
marks[0] = 22

# Slicing
print(marks[1:4])

# ------- ------- #
# Methods
# ------- ------- #

# Append - [Add at last]
list = [2, 1, 3]
list.append(4)
print(list)

# Sort
list.sort()
print(list)

# Sort - Reverse
list.sort(reverse=True)
print(list)

# Reverse [Depends on original arrangement]
list.reverse()
print(list)

# Remove - [remove first occurence]
list.remove(1)
print(list)

# Pop - [remove from specified index]
list.pop(1)
print(list)

# --------------------------------------

# ------- ------- #
# Tuples
# ------- ------- #

tup = (1,2,3,4)
print(tup)
print(type(tup))

print(tup[1:3])

# ------- ------- #
# Methods
# ------- ------- #

print(tup.index(4)) 
print(tup.count(1))
