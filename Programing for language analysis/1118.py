# 이번 학기 수강하는 과목의 점수를 입력 받아 리스트에 저장, 합격 불합격 과목의 수를 각각 출력
score  = []
p = 0
f = 0

n = int(input('이번학기 수강 과목 수: '))

for i in range(n):
    #i -> 0부터 n-1 
    score_elem = int(input('과목 점수: '))
    print('score {} : {}'.format(i+1,score_elem))
    score.append(score_elem)
    
for i in range(n):
    if score[i] >= 80:
        p += 1
    else:
        f += 1
print('pass: {}'.format(p))
print('fail: {}'.format(f))

#사용자로부터 시작과 끝값을 입력 받은 후 3의 배수 제외한 모든 숫자의 합 
start = int(input('시작값: '))
end = int(input('끝값: '))
sum = 0
for i in range(start, end+1):
    if i % 3 != 0:
        sum += i
        
print(sum)