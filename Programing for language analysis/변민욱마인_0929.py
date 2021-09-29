num = -1
if (num > 0):
    print('양수!')
elif(num < 0):
    print('음수')
else:
    print('0')
    
for i in range(3):
    for j in range(3):
        print('*')
        
    
for j in range(9, -1, -1):
    print('*'*j);


sum = 0
for i in range(100):
    sum += i 
    if(sum > 100):
        break
print('sum=', sum, ', i=', i)

def add_sub(a,b):
    sum = a+b
    diff = a -b 
    return sum, diff 

# print(add_sub(3,5))
def swap(a,b):
    return b,a 
a = 3
b = 5
a, b = swap(a, b)
print( 'a=', a, ', b=', b)

import random
print(random.randint(1,2)) 
#random이 자바스크립트에서는 0에서 1까지이지만 여기서는 범위 지정이 되는구나

def add(a,b):
    sum=a+b
    return sum
print(add(3,5))