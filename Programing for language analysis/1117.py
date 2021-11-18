f  = open('club.txt', 'w')
while True:
    name = input('name:')
    if not name: break
    f.write(name + '\n')
f.close()

f = open('club.txt', 'a')
while True:
    name = input('name:')
    if not name: break
    f.write(name + '\n')
f.close()

f=open('name.txt', encoding='utf-8')
data = f.readlines()
for line in data:
    print(line, end='')
f.close()

f = open('name.txt', encoding='utf-8')
data = f.readlines()
print(data)
f.close()

f = open('guest.txt', 'w')
while True:
    name = input('name: ')
    if not name: break
    print('{} welcome!'.format(name))
    f.write(name + '\n')
f.close()

f=open('guest.txt', 'r')
lines = f.readlines()
cnt = len(lines)
print('total count: {}'.format(cnt))

f =open('data.txt', 'r')
lines = f.readlines()
hap = 00
for line in lines:
    # line = line.rstrip() # 개행 문자 제거
    score = int(line.rstrip()) # 한줄씩 출력한 값
    hap += score
    
avg = hap/len(line)

print('합계: {}'.format(hap)) 
print('평균: {}'.format(avg))

f.close()

fin  = open('data.txt')
fout = open('output.txt', 'w')
lines = fin.readlines()

hap = 0

for line in lines:
    line = line.rstrip()
    score = int(line)
    hap += score

avg = hap/len(lines)

fout.write('hap: {}'.format(hap))
fout.write('avg: {}'.format(avg))

print('hap: {}'.format(hap))
print('avg: {}'.format(avg))

f = open('score2.txt', 'r', encoding='utf-8')
lines = f.readlines()
print('이름, 평균, 학점')

for line in lines:
    line = line.rstrip()
    score =line.split(' ')
     
    if(int(score[1]) > 90):
        print("{} {} A".format(score[0], score[1]))
    elif(90 > int(score[1]) >80):
        print("{} {} B".format(score[0], score[1]))
    
f = open('weather.txt','r')
lines = f.readlines()

for line in lines:
    line = (line.rstrip()).split(',')
    mean = (float(line[1]) + float(line[2])) / 2
    print('{}월의 평균기온은 {}입니다'.format(line[0], mean))

# def my_max(num1, num2):
#     if num1 > num2:
#         return num1
#     else:
#         return num2 
# a = int(input('1번 숫자:'))
# b = int(input('2번 숫자: '))
# print(my_max(a,b))
