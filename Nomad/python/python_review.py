# variables 
a = 2 
b_number = 3

# print 해주는 function 
# print(a + b)

# 문자열(string)
a_string = 'like this'
a_none = None #python에만 있는 none 타입. nothingness
#
a_boolean = False #0 "False"와는 완전히 다른 것! (앞에 대문자로 써야한다!)
# print(type(b_number))
# print(type(a_string))


#lists : 많은 values를 열거할 때 , mutable sequence
days = ["Mon", "Tues", "Wend", "Thur", "Fri"]
# print("monday가 있나요?","Mon" in days)
# print(days[0])
# print(len(days))
days.append("Sat")
# print(days)

# dictionary 
boram = {
    "name": "boram",
    "age": 29,
    "korean" : True,
    #  이렇게 다양한 데이터 종류를 저장할 수 있다. 
}


age = "18"
# print(type(age))
n_age = int(age) 
# print (type(n_age))

# function 파이썬에서는 함수를 정의하는 것이당
def say_hello():
    print("hello")
    # 들여쓰기로 함수를 판단한다. 자바스크립트처럼 {}를 사용하지 않는다. 
# print("bye") #그래서 bye만 출력된다. 

# say_hello() #이렇게 실행하면된다. ()가 버튼을 누른다고 생각하자! 


# argument 
def plus(a,b):
    print(a+b)
   
def minus(a,b) :
    print(a -b)
    
plus(2,5)
minus(2,5)
    # minus(2)만 입력하면 에러가 난다. argument를 2개 정의했기 때문에, 
    
def say_hello(name="annonymous"):
    print("hello", name)
    
say_hello() #읭? 아무것도 안 넣었는데 출력이 된다 => annonymous로 default값을 설정해줬기 때문. 


# return vs print 

# def p_plus(a,b):
#     print (a+b)
    
# def r_plus(a,b):
#     return a +b 

# p_result = p_plus(2,3)
# r_result = r_plus(2,3)

# print(p_result, r_result)
#파이썬에서 return 하는 순간 함수는 종료된다.                             
#print는 콘솔에 값을 출력하는 기능만 있고 이후에 값을 사용할 수 없다. 

# keyword argument 

result = plus(b=30, a=1) 
# 인자의 순서를 신경 쓸 필요가 없다. 

def say_hello(name, age):
    return f"Hello {name} you are {age} years old"

hello = say_hello("nico", "12")
# print(hello)

# 인자의 순서를 까먹거나 너무 많아질 때 keyword argument를 사용한다. 

def plus(a,b):
    if type(b) is int or type(b) is float:
        return a + b 
    else:
        return None 
    
# 저렇게 is를 사용할 수도 있다! if 다음에 조건, 실행할 것. 

# def age_check(age):
#     print(f"you are {age}")
#     if age < 18:
#         print ("you cnat drink")    
#     elif age == 18:
#         print ("you are new to this!")
#     elif age > 20 and age < 25:
#         print ("you are still kind of young")
#     else:
#         print("enjoy your drink")
        
# age_check(24)

# days =("Mon", "Tue", "Wed", "Thu", "Fri")
# for x in days: 
    # x는 작업이 실행될 때 생성된다. 
    # print(x)
# for x in days:
#  if days is "Wed":
#      break
#  else:
    #  print(days)
     
# ==== Module =====
import math

print(math.ceil(1.2)) #모듈을 import해줘야 사용가능하다. 
