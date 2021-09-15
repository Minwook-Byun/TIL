# animal = 'frog'
# print(animal[1:3])

# animal = ' elephant'
# print('왼꼭 벗겨내기: ', animal.lstrip());

# # choice 무작위로 문자를 출력
# import random
# from typing import Type
# chars = ['한','글','우','수']
# print(random.choice(chars))

# # shuffle() 실제로 배열의 순서가 바뀌어 저장됨
# random.shuffle(chars)
# print(chars)

# 배열형 자표구조. 문자열형, 유니코드 문자열형, 리스트, 튜플, 바이트 배열, xrange)
# mutable : list, dict, set

# 리스트, 다수의 자료형 입력 가능 
# 대괄호를 사용하며, 각각의 항목들은 콤마로 구분
'''
x = 12.23
y = 23.34
z = 100
packing = [x,y,z]
print(type(packing))
print('packing', packing)
[c1, c2, c3] = packing
print('unpacking:\nc1:', c1)
print('c2:', c2)
print('c3:', c3)
'''

# append : 1개의 인자 입력으로 받아들이고 마지막에 추가
# for 변수 in (범위, 배열): 명령문 1
# for i in range(3):
#     print("안녕!")

# 반복문
# for i in range(3):
#     print(i)
    
# for i in [0,1,2]:
#     print("hi")
    
# for i in[10,51,200,5]:
#     print("hi")

# a = list()
# for i in range(5):
#     a.append(i)
#     print(a[i]*2)
# print('a=', a)

# mylist = [3,5,4,9,1,8,2,1]
# newList = [i for i in mylist if(i%2)==0]
# print(newList)

# range 3개 시작값, 마지막값+1, 증가값
# for i in range(6, -1, -2):
#     print(i);

# quiz 5-12
# people =[31, 53, 41, 19, 15, 18, 21, 13]
# adult = [i for i in people if(i>=19)]
# print(adult)

# Del, pop
# nums = [1,3,5,7,9]
# nums.pop()
# print(nums)
# nums.pop()
# print(nums)
# nums.pop(2)
# print(nums)

nums = [0,1,2,3,4,5]
# nums[1:4] = []
# print(nums)

# Checking Membership
# word = 'orange'
# print('r' in word)
# print(5 in nums)
# print(3 not in nums)

# a =[1,2,3]
# b = a*2 
# print(b)

# for i in a:
#     print(i*2)
# print(a)

# index(), array 리스트에서 x값이 처음 나오는 인덱스 번호를 반환 

# nums = [3,5,2,1,5,3]
# nums.reverse()
# nums.sort(reverse=True)
# print(nums)

# fruits = ['apple', 'orange', 'grape', 'orange']
# fruits.sort()
# print(fruits)

# record = [
#     [1, 2, 3],
#     [10, 20, 30],
#     [100, 200, 300]]
# index = [ary[1] for ary in record]
# print(index)

# 튜플 초기화 한 후 변경할 수 없는 배열 
# fruits = '사과', '오렌지', 1020, 880
# print(fruits[1])
# fruits[1] = '키위'
# print(fruits)
# TypeError: 'tuple' object does not support item assignment

# animals = ('토끼', '사자', '원숭이')
# fruits = '사과', '오렌지', 1020, 88,
# print(animals, fruits)

# fruits = {'사과', '오렌지', '포도', '수박'}
# fruits.remove('오렌지')
# print(fruits)
# fruits.pop()
# print(fruits)
# fruits.clear()
# print(fruits)

one = {1, 3, 5, 7, 8}
two = {1, 3, 5, 6, 8}
print('one | two:', one | two)
print('one | two:', one & two)
print('one - two:', one - two)
print('one ^ two:', one ^ two)
