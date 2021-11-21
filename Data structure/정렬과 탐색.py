def __eq__(self, setB):
    if self.size() != setB.size():
        return False
    
    for idx in range(len(self.items)):
        if self.items[idx] != setB.items[idx]:
            return False
        return True
    
    
def union(self, setB):
    newSet = set()
    a = 0
    b = 0
    
    while a < len(self.items) and b < len(setB.items):
        valueA = self.items[a]
        valueB = setB.items[b]
        if valueA < valueB:
            newSet.items.append(valueA)
            a += 1 
        elif valueA > valueB:
            newSet.items.append(valueB)
            b += 1
        else:
            newSet.items.append(valueA)
            a += 1
            b += 1
            
    while a < len(self.items):
        newSet.items.append(self.items[a])
        a += 1
    while b < len(setB.items):
        newSet.items.append(setB.items[b])
        b += 1
    return newSet

#순차 탐색 함수 

def sequential(A, key, low, high):
    for i in range(low, high+1): #low, low+1, ..., high
        if A[i].key == key: #탐색이 성공하면 
            return i        #인덱스를 반환
    return None             #탐색에 실패하면 None을 반환


#recursive
def binary_search(A, key,low, high):
    if(low <= high):
        middle = (low+high) // 2
        if key == A[middle].key:
            return middle #탐색 성공
        elif (key < A[middle].key): #왼쪽 검색
            return binary_search(A,key,low, middle-1)
        else:
            return binary_search(A,key,middle+1, high)
    return None 

#repeated 
def binary_search(A,key,low,high):
    while(low <= high):
        middle = (low+high)//2
        if key == A[middle].key:
            return middle
        elif(key > A[middle].key):
            low = middle + 1
        else:
            high = middle - 1
    return None


class Entry:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        
    def __str__(self):
        return str("%s: %s" % (self.key, self.value))

class SequentialMap:                       #순차탐색 맵 
    def __init__(self):
        self.table = []                    #맵의 레코드 테이블
        
    def size(self): return len(self.table) #레코드의 개수 
    
    def display(self, msg):
        print(msg)
        for entry in self.table:            # 테이블의 모든 엔트리에 대해서
            print(" ", entry)               #출력(연산자 중복함수 사용)
            
    def insert(self, key, value):
        self.table.append(Entry(key, value))