# 데이터형 : 자료형이라고도함 
# 컴퓨터에서 다뤄지는 다양한 데이터 값들의 유형을 의미
# 정수형, 실수형, 문자형, 부울형이 있다. 
# 인터프리터 방식 언어이다. 
type("hello") #class 'str'>
#문자열형(str)
#단어나 문장을 저장하기 위한 데이터형
#파이썬에는 문자형이(char)이 없음 
type(3)
type('3'+'5')
#변수(variable)
#데이터를 저장할 수 있는 메모리 공간의 이름
#프로그래머가 쉽게 데이터에 엑세스할 수 있도록 특정 메모리에 이름을 붙인 것
#지속적으로 다른 값으로 갱신할 수 있음. 

x=10
x=20
y=3
# x+y = 23

#등호(=), 대입연산자
#산술적인 계산이 아님, 오른쪽에 위치한 값을 왼쪽에 저장하라는 연산자

#파이썬의 문자열형 변수
#작은 따옴표를 사용, 문자형과 문자열형을 같이 사용
#큰 따옴표를 사용해도 됨 

#부울형 변수
#boolean의 약어 bool. true ㄸ는 false
print(type(True)) #소문자는 안 된다

# 관계연산자 =이 뒤에
print(x>0)
print(x>y)
print(x<y)
print(x==y)
print(x!=y)

x=20
y=20
print(x<y)

# 논리연산자
# 2개의값이나변수간논리적인연산을수행
# 결과는참또는거짓
print(x<=y and x==y)
print(x<y or x==y)


#비트 연산자
#1을 true, 0을 false로 생각 

print(0x12)
print(0xD2)
print(0o22)
age = 21
print('my age', age) #서로 형이 다를 때에는 , 를 사용해야 한다. 

#c언어 ㅇ사 형태 출력 형식
# %이후에 출력하려는 값이나 변수를 사용
print('%f' %3.5)
print('%5.2f' %3.5)
# 5자리를 출력하라고 했기에 앞 한 자리는 빈자리
print('%o' %9)
print('%x' %18)
print('%x' %208)

# 입력함수 - 문자열 데이터값 입력
# input() 함수를 사용
num = input("number: ")
print(int(num) * 3)

num1 =int(input('number: '))
print(num1 *3)

# 실수형 데이터 값 입력
# int()함수, 실수형 데이터도 정수로 변환 가능
# 소수점  이하의 수는 저장할 수 없고 무자열 형태로 된 실수는 에러 발생

# 부울형 데이터 값 입력 
# 문자열형 값을 입력하면 무조건 참
a = input('yes/no: ')
print(bool(a))

a = input('yes(1)/no(0): ')
print(bool(a))

a = int(input('yes(1)/no(0): '))
print(bool(a))

#문자열 슬라이딩
a='python'
print(a[3])
print(a[-3])

print(a[1:3]) #1이상 3미만 
print(a[0:3:2]) #2는 간격
print(a[1:]) #1부터 쭉 추출

a='frog'
len(a)

a='python program'
print(a.replace('p','P'))

b='puppy'
print(b.replace('p','P'))
print(a.upper())
print(a.lower())

b='Python Program'
print(b.swapcase())
print(a.capitalize())