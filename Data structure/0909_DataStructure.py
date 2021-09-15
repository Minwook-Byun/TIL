# python review
# 생성자를 사용해서 만드는 것이 안정적이다
# 인덱스는 0부터, 거꾸로는 -1부터. 아이템이 많을 때 끝에서부터 지정할 때 음수를 사용
# 인덱스를 사용해서 추가/삭제/수정 불가

a = str('apple')
print(a.upper())

big3 = [] 
lotto = [23, 34, 11, 42, 9]
big4 = [ '제이플라', '도티', '대도서관', '보람튜브']
print("lotto[1] = ", lotto[1])
big4[2] = '블랙핑크'

big3.append("알라딘")
big3.append("엘사")
big3.append("안나")


#a.append('a') 
#s.append(['a', 'b']) => 리스트 자체가 하나의 아이템 ['x',['a','b']] 으로 
#s.extend(['a','b']) => 만약에 리스트이면 다 풀어서 집어놔준다. 
#append와 extend 구별하기!! 

#tuple packing 
t_01 = (1,2)
print('tuple packing: ', end='')
print(t_01)
print('packing - each item: ', end = '')
for i in t_01:
    print(i, end = '')
print()

#tuple unpacking 
print('tuple unpacking: ', end ='')
a,b = t_01
print('a: ', a, 'b: ', b)
print()

#2.7 사용자 정의 함수
#함수, 특정 task를 수행하는 코드 덩어리
#장점, 필요할 때마다 호출하여 재사용 가능
