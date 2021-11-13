def bubble_sort(A): #버블 정렬
    n = len(A)
    for i in range(n-1, 0, -1): #외부 루프 
        bChanged = False
        for j in range (i): #내부 루프 
            if (A[j]) > A([j+1]):   #순서가 맞지 않으면
                A[j], A[j+1] = A[j+1],A[j] #교환
                bChanged =True #교환이 발생했음
                
            if not bChanged: break; #교환이 없으면 종료
            printStep(A, n-i)
            
def insert(self, elem): 
    if elem in self.item : return       #이미 있다면 종료
    for idx in range(len(self.item)):   #loop n번
        if elem < self.item[idx]:       # 삽입할 위치 idx를 찾는다 
            self.itmes.insert(idx, elem)# 그 위치에 삽입
            
            return
    self.items.append(elem) # 맨 뒤에 삽입 
    
    
    
    