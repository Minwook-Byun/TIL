# age = int(input('나이: '))
# print(type(age))
# old = age + 10
# print('십년 후 나이: ', old)

# num = -1
# if(num > 0 ):
#     print('양수')
# elif(num < 0):
#     print('음수')
# else:
#     print('0')
    
# for i in range(3):
#     print('hi')

# for i in range(0,7,2):
#     print(i)

# result = 0 
# for i in range(1, 11):
#     result += i;
# print(result)

# for i in range(3):
#     for j in range(3):
#         print('🌟 ', end='')
#     print('')

# sum = 0

# for i in range(100):
#     sum += i
#     if (sum > 100):
#         break
# print('sum=', sum)

# def 함수명(입력인자):
#     # 명령문 
#     return 

# def double(num):
#     print(num, '의 제곱:', num*num)
# double(3)

# def swap(a,b):
#     return b, a 

# a = 3
# b = 5
# print('a는', a, 'b는' ,b)
# a, b =swap(a,b) 
# print('a는', a, 'b는' ,b)

    
# print('"안녕"')

# animal = 'elephant'
# print('앞쪽 찾기:', animal.find('e')) #앞쪽 찾기: 0 문자나 문자열이 처음 나오는 
# print('ep 찾기:', animal.find('ep') ) #ep 찾기: 2 인덱스의 값을 반환한다 
# print('뒤쪽 찾기:', animal.rfind('e')) #뒤쪽 찾기: 2 rearFind 가장 나중에 나오는 인덱스 값을 반환 
# print('위치:', animal.index('e')) #위치: 0 find와 기능 동일, 찾는 내용이 없다면 에러 발생 

# animal = 'elephant'
# print('n이 있다' 'n' in animal)#False 
# print('an이 없다', 'an' in animal) #True
# ⚠️ 문자열이면 제발 ''로 감싸! 

# lang = 'python'
# print('선택수정:', lang.replace('p','P'))
# print('소문자: ', lang.lower()) 
# print('대문자: ', lang.upper())
# print('대소문자 swap', lang.swapcase())

# animal = '  elephant  '
# print('오른쪽 공백 없애기',animal.rstrip())
# print('왼쪽 공백 없애기', animal.lstrip())

# import random 
# print(random.random())

# import random
# print(random.randrange(1,6))

# import random
# print(random.choice('한글우수'))

# # 알파벳, 숫자, 특수문자 중에서 입력한 숫자만큼의 문자를 무작위로 추출하여 문자열 형식으로 저장하고 출력하는 함수 만들기

# import random
# def password(length):
#     pw = str()
#     chars = 'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '!@#$%^&*'
    
#     for _ in range(length):
#         pw = pw + random.choice(chars)
#     return(pw)

# print(password(8))

# fruits = ['사과', '오렌지', '포도', '복숭아']

# x = 12.23
# y = 23.34

# packing = [x,y] #패킹!
# type(packing)
# print('패킹', packing)

# [c1, c2] = packing #unpacking 
# print('c1', c1)
# print('c2', c2)

# #quiz 5.8 
# student = ['민준', 172, '서연', 168, '현우', 171,'민서',189,]
# alldata = student+ ['동현', 179]
# print(len(alldata), "개 데이터")
# print(alldata)

# def new(n,x):
#     n = 2
#     x.append(x[-1]+1)
#     print('new: ', n, x)
    
# def one():
#     n =1 
#     x = [0, 1, 2]
#     print('one: ', n, x)
#     new(n,x)
#     print('one: ', n, x)
# one()

# bird_pos = []
# animals = ['새', '코끼리', '강아지', '새', '강아지', '새']
# for i, animal in range(len(animals)):
#     if (animal == '새'):
#         bird_pos.append(animals.index('새'))
# print(bird_pos)

    