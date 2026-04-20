# ------- ------- #
# Dictionary 
# ------- ------- #

info = {
    "name": "Ajay",
    "subjects": ["Python", "C", "Java"],
    "topics": ("dict", "set"),
    "age": 29,
    "marks": 94.4
}
print(info)
print(type(info))

null_dict = {}
print(null_dict)

info["marks"] = 96.4 
print(info)

# Nested Dictionary 
student = {
    "name": "Rahul Kumar",
    "subjects": {
        "physics": 89,
        "chemistry": 78,
        "maths": 81
    }
}
print(student["subjects"]["physics"])


# Methods
# Converting keys into list [Manual TypeCasting]
print(list(student.keys())) 
print(list(student.values()))
print(list(student.items()))

print(student["subjects"]["chemistry"])         # Throws error
print(student.get("subjects").get("chemistry")) # Return None if not found

student.update({"city": "Delhi"})
print(student)

# ------- ------- #
# Set 
# ------- ------- #

collection1 = {1, 2, 2, 4, "hello", "world", "world"}
print(collection1)
print(type(collection1))

# empty set
collection2 = set() # why set keyword otherwise create empty tuple
print(collection2)
collection2.add(1)
collection2.add(2)
collection2.add("Hello")
collection2.remove(2)
print(collection2)

collection2.pop()
print(collection2)

collection2.clear()
print(collection2)

set1 = {1, 2, 3}
set2 = {3, 4, 5}

print(set1.union(set2))
print(set1.intersection(set2))
