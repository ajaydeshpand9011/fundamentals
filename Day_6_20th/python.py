# ------- ------- #
# Function 
# ------- ------- #

def add(a, b):      # paramters
    return a + b

print(add(1, 2))    # arguments
print(add(10, 10))  # arguments

# ------- ------- #
# Recursion 
# ------- ------- #

def show(n):
    if(n==0):
        return
    print(n)
    show(n-1)

show(5)