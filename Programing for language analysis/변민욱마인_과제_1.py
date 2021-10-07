# 52p. Quiz 4.1 
# (1) sum ()함수 완성
def sum(n):
    sum = 0
    for i in range(1,n+1):
        sum += i
    return sum 
print(sum(10))

# (2)팩토리얼 계산
def factorial(n):
    result = 1;
    for i in range(1,n):
        result *= i+1
    return result

print(factorial(3))

# 69p. Quiz 5.3
# (1)
animal = 'frog'
print(animal[1:4:2])
# 결과 : rg

# (2)
animal = 'elephant'
print(animal[1:7:2])
# 결과 : lpa

# (3)
animal = 'elephant'
print(animal[5:])
# 결과 ant

# (4)
animal = 'elephant'
print(animal[:3])
# 결과 ele 

#(5)
animal = 'elephant'
print(animal[3:-3])
# 결과 ph

#(6)
animal = 'elephant'
print(animal[:])
# 결과 elephant

#(7)
animal = 'elephant'
print(animal[-5:-2])
# 결과 pha

#(8)
animal = 'elephant'
print(animal[::3])
print(animal[::-1])
print(animal[::])
# 결과
# epn
# tnahpele
# elephant

#Quiz 5.10 
bird_pos = []
animals = ['새', '코끼리', '강아지', '새', '강아지','새']
for i, animal in enumerate (animals):
    if (animal == '새'):
        bird_pos.append(i)
print(bird_pos) #[0, 3, 5]

#Quiz 5.15
# (1)
import random
bigdata =[]
nodata = []
for i in range(100):
    bigdata.append(random.randint(1,33))
print(bigdata)
for i in range(1,33):
    if i not in bigdata:
        nodata.append(i)
print('존재하지 않는 값(들): ', nodata) #존재하지 않는 값(들):  [18, 21]
#왜 안 되지? 할 때는 여러번 더 해보기
# (2)
import random
bigdata =[]
nodata = []
for i in range(100):
    bigdata.append(random.randint(1,33))
print(bigdata)
nodata = [i for i in range(1,33) if i not in bigdata]
print('존재하지 않는 값(들): ', nodata)

#quiz 5.20

age = {'동혁':21, '민지':19, '준혁':23}

# (1) 
print(age.get('동혁')) #21

age['민지'] = age['민지'] + 1
print(age.get('민지')) 

student = {'GilDong': 2345, 'SunSin':1234, 'SeJong':3456}
for name in student.keys():
    print(name, ': ', student.get(name))

    
student = {'GilDong': 2345, 'SunSin':1234, 'SeJong':3456}
for name, num in student.items():
    print(name,': ', num)
    
