'''
#114p quiz 6.1
class You:
    def setname(self, n):
        self.name = n
    def setage(self, a):
        self.age = a;
    def show(self):
        print('이름: ',self.name, '나이: ', self.age);
    
my = You()
my.setname('준서')
my.setage(21)
my.show()

#클래스 선언
class You:
    name = '' #멤버변수 정의
    def setname(self, n):
        self.name = n
    def show(self):
        print('이름: ', self.name)
#main부분 
my = You()
my.setname('민욱')
my.show()

#random
import random
print(random.randint(51,92))

chars = '한글우수'
print(random.choice(chars))

chars = ['한', '글', '우', '수']
random.shuffle(chars)
print(chars)

#출력형식2 
n = 12345.6789
m = 123.456789
print('a={0:5.2f}, b={1}' .format(n,m))
print('a={0}, b={1:5,.2f}' .format(n,m))

#출력형식 1
a, b = 10, 20
print(a, b)
print('a=%d, b=%d' %(a,b))
print('a=%4.1f, b=%4.2f' %(a,b))
print('a=%4.1f, b=%10.2f' %(a,b))
print('a={}, b={}' .format(a,b))

#factorial
import math 
print('13!=', math.factorial(13))


#두 수의 합, 차 , 곱, 나머지 계산
def add_sub(a,b):
    hap = a+b 
    diff = a-b
    mul = a * b
    rem = b % a
    return hap, diff, mul, rem

print(add_sub(3,5))

#사용자 정의 함수 
def double(num):
    square = num*num
    return square

# m=123
# print(square)

print(double(7))

a = 2
b = 3.7
c = 2 + 3j 
d = 'python'

print(type(a))
print(type(b))
print(type(c))
print(type(d))
'''