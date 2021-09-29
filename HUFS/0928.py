# p.59 구구단 만들기
# dan = int(input("구구단 단 입력: ")) 
# for n in range(2, 10, 1):
#     print ("%2d x %2d= " %(dan,n), dan*n)
    
# 컬렉션 자료형에 대해 for문을 사용할 수 있다. 
# for item in [12, 33, 52, 26, 99]:
#     print("값=", item)

# 집합에 대해서도 가능하다. 집한은 선형 자료구조가 아니므로 
# 출력 순서는 다르게 나타날 것이다. 그렇지만 반드시 모든 숫자를 한 번씩 출력한다. 
# mySet = set([12, 33, 52])
# for e in mySet:
#     print("값=", e)
    
# 여러 값 반환
# def find_min_max(A):
#     min = A[0];
#     max = A[0];
#     for i in range(1, len(A)):
#         if (max < A[i]): max = A[i];
#         if (min > A[i]): min = A[i];
#     return min,max

# data = [5,3,8,4,9,1,6,2,7];
# x, y = find_min_max(data);
# print("(min,max)= ", (x,y))

class Car:
    def __init__(self,color, speed = 0):
        self.color = color
        self.speed = speed
        
    car1 = Car('black',0)
    car2 = Car('red', 120)