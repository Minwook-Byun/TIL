# def __eq__(self, setB):
#     if self.size() != setB.size():
#         return False
    
#     for idx in range(len(self.items)):
#         if self.items[idx] != setB.items[idx]:
#             return False
#         return True
    
    
# def union(self, setB):
#     newSet = set()
#     a = 0
#     b = 0
    
#     while a < len(self.items) and b < len(setB.items):
#         valueA = self.items[a]
#         valueB = setB.items[b]
#         if valueA < valueB:
#             newSet.items.append(valueA)
#             a += 1 
#         elif valueA > valueB:
#             newSet.items.append(valueB)
#             b += 1
#         else:
#             newSet.items.append(valueA)
#             a += 1
#             b += 1
            
#     while a < len(self.items):
#         newSet.items.append(self.items[a])
#         a += 1
#     while b < len(setB.items):
#         newSet.items.append(setB.items[b])
#         b += 1
#     return newSet

# #순차 탐색 함수 

# def sequential(A, key, low, high):
#     for i in range(low, high+1): #low, low+1, ..., high
#         if A[i].key == key: #탐색이 성공하면 
#             return i        #인덱스를 반환
#     return None             #탐색에 실패하면 None을 반환


# #recursive
# def binary_search(A, key,low, high):
#     if(low <= high):
#         middle = (low+high) // 2
#         if key == A[middle].key:
#             return middle #탐색 성공
#         elif (key < A[middle].key): #왼쪽 검색
#             return binary_search(A,key,low, middle-1)
#         else:
#             return binary_search(A,key,middle+1, high)
#     return None 

# #repeated 
# def binary_search(A,key,low,high):
#     while(low <= high):
#         middle = (low+high)//2
#         if key == A[middle].key:
#             return middle
#         elif(key > A[middle].key):
#             low = middle + 1
#         else:
#             high = middle - 1
#     return None


# class Entry:
#     def __init__(self, key, value):
#         self.key = key
#         self.value = value
        
#     def __str__(self):
#         return str("%s: %s" % (self.key, self.value))

# class SequentialMap:                       #순차탐색 맵 
#     def __init__(self):
#         self.table = []                    #맵의 레코드 테이블
        
#     def size(self): return len(self.table) #레코드의 개수 
    
#     def display(self, msg):
#         print(msg)
#         for entry in self.table:            # 테이블의 모든 엔트리에 대해서
#             print(" ", entry)               #출력(연산자 중복함수 사용)
            
#     def insert(self, key, value):           #삽입 연산
#         self.table.append(Entry(key, value))# 리스트 맨 뒤에 추가 
        
#     def search(self,key):
#         pos = sequential_search(self.table, key, 0, self.size()-1)
#         if pos is not None : return self.table[pos] 
#         else : return None 

#     def delete(self, key):                 #삭제연산: 항목 위치를 찾아서 pop
#         for i in range(self.size()):
#             if self.table[i].key == key:   #삭제할 위치를 먼저 찾고 
                # self.table.pop(i)          # 리스트의 pop으로 삭제 
                # return
            
#체이닝을 이용한 해시 맵 
# class HashChainMap:
#     def __init__(self,M): #테이블의 크기 M // def랑 init 띄어야 해염
#         self.table = [None]*M   
#         self.M  = M
        
#     def hashFn(self, key):      #사용할 해시 함수 
#         sum = 0
#         for c in key:           #문자열의 모든 문자에 대해 
#             sum = sum + ord(c)  #아스키 코드 값을 모두 더함 
#         return sum % self.M 
    
#     def insert(self, key, value): #key, value 입력 
#         idx = self.hashFn(key)  #해시 주소 계산 
#         self.table[idx] = Node(Entry(key, value), self.table[idx])  #전단 삽입
    
#     # def insert(self, key, value):   
#     #     entry = Entry(key, value)   #(1)엔트리 생성 
#     #     node = Node(entry)          #(2)엔트리로 노드를 생성 
#     #     node.link = self.table[idx] #(3)노드의 링크필드 처리 
#     #     self.table[idx] = node      #(4)테이블의 idx항목: node로 시작 
    
#     def search(self, key):
#         idx = self.hashFn(key)
#         node = self.table[idx]
#         while node is not None: 
#             if node.data.key == key:
#                 return node.data
#             node = node.link
#         return None 
    
#     def delete(self,key):
#         idx = self.hashFn(key)
#         node = self.table[idx]
#         before = None
#         while node is not None: 
#             if node.data.key == key:
#                 if before == None:
#                     self.table[idx] = node.link
#                 else: 
#                     before.link = node.link 
#                 return
#             before = node          #before 갱신 
#             node = node.link       #node 갱신
            
#     def display(self,msg):
#         print(msg)
#         for idx in range(len(self.table)):
#             node = self.table[idx] 
#             if node is not None:
#                 print("[%2d]->"%idx, end='')
#                 while node is not None:
#                     print(node.data, end=' -> ')
#                     node = node.link
#                 print()


### 파이썬 딕셔너리를 이용한 구현 
d = {}
d['data'] = '자료'
d['structure'] = '구조'
d['sequential_search'] ='선형 탐색'
d['game'] = '게임'

if d.get('game'):
    print("탐색:game-->", d['game']) #탐색

d.pop('game') #항목 삭제