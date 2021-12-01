# # 이번 학기 수강하는 과목의 점수를 입력 받아 리스트에 저장, 합격 불합격 과목의 수를 각각 출력
# score  = []
# p = 0
# f = 0

# n = int(input('이번학기 수강 과목 수: '))

# for i in range(n):
#     #i -> 0부터 n-1 
#     score_elem = int(input('과목 점수: '))
#     print('score {} : {}'.format(i+1,score_elem))
#     score.append(score_elem)
    
# for i in range(n):
#     if score[i] >= 80:
#         p += 1
#     else:
#         f += 1
# print('pass: {}'.format(p))
# print('fail: {}'.format(f))

# #사용자로부터 시작과 끝값을 입력 받은 후 3의 배수 제외한 모든 숫자의 합 
# start = int(input('시작값: '))
# end = int(input('끝값: '))
# sum = 0
# for i in range(start, end+1):
#     if i % 3 != 0:
#         sum += i
        
# print(sum)


# n = int(input())
# print(n)
# arr  = [] 

# for w in input().split():
#     t  = int(w)
#     arr.append(t)
    
# s = [str(w) for w in arr]
# s.reverse()
# output = ' '.join(s)
# print(output)

# arr = [1,3,4,5,67,78,9]

# for i in range(len(arr)):
#     print('hello', end=' * ')

# a, b = input('문자열 두 개를 입력하세요: ').split()    # 입력받은 값을 공백을 기준으로 분리해서 a,b에 저장

# a,b =map(int, input().split(' '))   
# # map에 int와 input().split()을 넣으면 split의 결과를 모두 int로 변환해줍니다
# if a > b :
#     print('>')
# elif a == b:
#     print('==')
# else:
#     print('<')


# 9498번
# a = int(input())
# if a >= 90:
#     print('A')
# elif 90> a >= 80:
#     print('B')
# elif 80> a >= 70:
#     print('C')
# elif 70> a >= 60:
#     print('D')
# else:
#     print('F')

# #2753
# a = int(input())
# if( a % 4 ==0 and a%100!=0 or a % 400 == 0):
#     print(1)
# else:
#     print(0)

# # a,b = map(int, input().split('\n')) 이런 식으로 왜 받음!>?
# a = int(input())
# b = int(input())
# if a > 0 and b > 0:
#     print(1)
# if a > 0 and b < 0:
#     print(4)
# if a < 0 and b < 0:
#     print(3)
# if a< 0 and b > 0: 
#     print(2)
# guard clause 사용

#2884
# a, b = map(int, input().split())
# if a > 0 and b > 45:
#     print(a,b-45)
# if a > 0 and b <= 45:
#     print(a-1,b+15)
# if a == 0 and b > 45:
#     print(a+23,b-45)
# if a == 0 and b <= 45:
#     print(a+23,b+15)

#2739
# a = input()
# for i in range(1,10):
#     print(a,'*',i,'=',int(a)*int(i)) #int 변환하는 부분 일치