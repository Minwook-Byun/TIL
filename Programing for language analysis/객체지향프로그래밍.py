#클래스 선언
class You:
    name = '' #attribute 정의
    
    def setname(self, username): 
        self.name = username
        # this.name = username 이런 느낌인가
        
    def show(self):
        print('이름:', self.name)
        # this.name 
# my = You()
# my.setname('보람')
# my.show()
    
# 그러나 파이썬은 항상 멤버변수 앞에 self. 을 붙이기 때문에 우와 같이 별도로 멤버변수의 속성을 정의할 필요가 없다.
class You:
    def setname(self, username):
        self.name = username
    def show(self):
        print('이름:', self.name)
        
        
class You:
    def __init__(self, n, a):
        self.name = n
        self.age = a
    
    def show(self,msg):
        print('이름:', self.name, '나이:', self.age, msg)
        
# my = You('보람',26) #객체가 생성될 때 자동으로 __inint__실행
# my.show('ㅎㅇ')

class Calc:
    def __init__(self,n1,n2):
        self.a = n1
        self.b = n2
        
    def calculate(self, op): 
        if op == '+':
            print(self.a, op, self.b,'=', self.a+self.b)
         
        if op == '*':
            print(self.a, op, self.b,'=', self.a*self.b)    
            
#test 
# num1 = int(input('첫번째 수: '))
# num2 = int(input('두번째 수: '))
# 객체 = Calc(num1, num2)
# 객체.calculate('*')
# 객체.calculate('+')


# array = [[9,9], [0,4], [2,3]]
# for x,y in array: 
#     print(x , y)
    
# #quiz 6.5
# array = [['도윤', 21], ['b', 26], ['c',34]]
# for x,y in array:
#     print(x, ':', y, '세')

# text = "어서 오세요! 어서 오세요! 오래 기다렸다구요."
# def max_counts(text):
#     skips = ['!',  "'", "."]
    
#     for skip in skips:
#         text = text.replace(skip, '')
    
#     print(text.split(' ')) #['어서', '오세요', '어서', '오세요', '오래', '기다렸다구요']
    
#     counts = {} 
    
#     for ch in text.split(' '):
#         if ch in counts:
#             counts[ch] += 1
#             # print(counts)
#         else:
#             counts[ch] = 1  
#             # print(counts)
#     print(counts)

    
       
# max_counts(text)  

# people = ['침', '침', '펄','옥', '펄','침']

# def max_count(people):
#     counts = {}
#     for i in people:
#         if i in people:
#             counts[i] +=1
#         else:
#             counts[i] = 1
#         return counts

# counts = max_count(people)

# first = []
# max_num = max(counts.values())
# for x, y in counts.items():
#     print(x, y)
#     if y == max_num:
#         first.append(x)
# print('1등', first)    
            
import scipy.stats as ss
nums = [1,1,1,2,2,2,2,2,3,3,3,2,1]
mode, count = ss.mstats.mode(nums)
print(mode,count)