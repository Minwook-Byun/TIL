import sys
a = []
print(sys.getsizeof(a))
a.append(10)
print(sys.getsizeof(a))

class Stack:
    def __init__(self):
        self.items = [] 
        # 데이터 저장을 위한 리스트 준비
        
    def push(self, val):
        self.items.append(val)
        
    def pop(self):
        try:
            return self.items.pop()
        except IndexError:
            print("Stack is empty")
            
    def top(self):
        try:
            return self.items[-1]
        except IndexError:
            print("Stack is empty")
            
    def __len__(self):
        return len(self.items)
    
    
# 클래스를 좀 더 공부해보자 
# 클래스 = 함수 + 변수 
# 오브젝트 : 클래스를 통해서 생성 ex) 클래스=붕어빵틀, 오브젝트 =붕어빵

# self: 클래스 객체표현, init함수와 연결할 때 활용한다. 
# .:객체 변수 점근 오브젝트 명칭 + 클래스 속성 => 오브젝트 출력 
# person이라는 클래스를 만들어보자 

# class Person:
#     name = "보람"
#     def say_hello(self):
#         print("안녕! 나는"+self.name)
        
# p = Person() 
# p.say_hello()


class Person:
    def __init__(self, name):
        self.name = name;
        
        