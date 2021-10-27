class You:
    def __init__(self):
        self.name = input('이름: ')
        self.age = int(input('나이: '))
    def show(self):
        print('이름: ', self.name, '나이: ', self.age)
        
student = []
for i in range(3):
    student.append(You())

for i in range(len(student)):
    student[i].show()


'''
class Calc:
    def __init__(self, n1, n2):
        self.a = n1
        self.b = n2
    
    def calculate(self, op):
        if(op == '+'):
            print(self.a, '+', self.b, '=', self.a+ self.b)
        elif(op == '*'):
            print(self.a, '*', self.b, '=', self.a+ self.b)
            
num1  = int(input('Num1:'))
num2  = int(input('Num2:'))
obj = Calc(num1, num2)
obj.calculate('+')
obj.calculate('*')

import random
bigdata = []
nodata = []
indata = []

for i in range(10):
    bigdata.append(random.randint(1,33))
print(bigdata)

for i in range(1,34):
    if i in bigdata:
        indata.append(i)
print('존재하는 값들: ',nodata)

for i in range(1,34):
    if i not in bigdata:
        nodata.append(i)
print('존재하지 않느 값들: ',nodata)
                   
bird_pos = []
animals = ['새', '코끼리', '강아지', '새', '강아지', '새']
for i, animal in enumerate(animals):
    if(animal == '새'):
        bird_pos.append(i)
print(bird_pos)
'''
