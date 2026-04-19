# ------- ------- #
# Loops 
# ------- ------- #

# while

count = 1
while(count <=5): 
    print("Hello World")
    count += 1

print("---------------")

i = 5
while(count >= 1):
    print("Reverse")
    count -= 1
    
print("---------------")

# for
nums = [1, 2, 3, 4, 5]

for num in nums:
    print(num)

print("---------------")

for i, x in enumerate(nums):
    print(f"Index: {i}, Value: {x}")
