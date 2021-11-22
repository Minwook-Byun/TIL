class TNode:
    def __init__(self, data, left, right):
        self.data = data    #노드의 데이터
        self.left = left    #왼쪽 자식을 위한 링크
        self.right = right  #오른쪽 자식을 위한 링크 
        
    def preorder(self, n):  #전위 순회 함수 
        if n is not None:
            print(n.data, end=" ")  #먼저 루트노드 처리 
            preorder(n.left)        #왼쪽 서브트리 처리 
            preorder(n.right)      #오른쪽 서브트리 처리       
    
    def inorder(self, n):
        if n is not None:
            inorder(n.left) #왼쪽 서브트리 처리
            print(n.data, end ='') #루트 노드 처리(화면 처리)
            inorder(n.right) #오른쪽 서브트리 처리 
            
    def levelorder(root):
        queue = CircularQueue()
        queue.enqueue(root) #최초의 큐에는 루트 노드만 들어있다
        while not queue.isEmpty():  #큐가 공백 상태가 아닌 동안, 
            n = queue.dequeue()     #큐에서 맨 앞의 노드 n을 꺼낸다 
            if n is not None:
                print(n.data, end='')   #먼저 노드의 정보를 출력 
                queue.enqueue(n.left)   #n의 왼쪽 자식 노드를 큐에 삽입
                queue.enqueue(n.right)  #n의 오른쪽 자식 노드를 큐에 삽입 
                
                
    def count_node(n):
        if n is None:
            return 0
        else:
            return 1 + count_node(n.left) + count_node(n.right)
        
    def count_leaf(n):
        if n is None:                               #공백 트리 -- 0을 반환        
            return 0
        elif n.left is None and n.right is None:    #단말노드 - 1을 반환
            return 1 
        else:                                       #비단말 노드: 좌우 서브트리의 결과 합을 반환 
            return count_leaf(n.left) + count_leaf(n.right)
        
        
    def calc_height(self,n):
        if n is None:
            return 0
        hLeft = self.calc_height(self, n.left)
        hRight = self.calc_height(self, n.right)
        if(hLeft > hRight):
            return hLeft + 1
        else:
            return hRight +1 
        
        # https://stackoverflow.com/questions/17843785/python-recursion-within-class