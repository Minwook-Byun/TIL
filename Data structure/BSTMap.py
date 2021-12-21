class BSTMap():         
    def __init__(self):  # 생성자 
        self.root = None # 트리의 루트 노드 
        
    def isEmpty(self) : return self.root == None #맵 공백검사 
    def clear(self) : self.root = None #맵 초기화 
    def size(self) : return count_node(self.root) #레코드(노드) 수 계산
    
    def search(self, key): return search_bst(self.root, key)
    def searchValue(self, key): return search_value_bst(self.root, key)
    def findMax(self) : return search_max_bst(self.root)
    def findMin(self) : return search_min_bst(self.root)
    
    def insert(self, key, value = None): #삽입 연산
        n = BSTNode(key, value)         #키와 값으로 새로운 노드 생성 
        if self.isEmpty(): self.root = n # 공백이면 루트노드로 삽입 
        else: insert_bst(self.root, n) #공백이 아니면 - insert_bst() 호출
        
    def delete(self, key):                     #삭제 연산 
        self.root = delete_bst(self.root, key) #delete_bst() 호출 
        
    def display(self, msg='BSTMap: '): 
        print(msg, end= ' ');
        inorder(self.root)
        print()
    
    def rotateRR(A):
        B = A.right
        A.right = B.left
        B.left = A
        return B
    
    def rotateRL(A):
        B = A.right
        A.right = rotateLL(B)
        return rotateRR(A)
    
    def rotateLR(A): 
        B = A.left
        A.left = rotateRR(B)
        return rotateLL(A)
    
    def reBalance(parent):
        hDiff = cal_height_diff(parent) #parent의 왼쪽과 오른쪽 서브트리 높이차를 반환
        
        if hDiff > 1 :
            if cal_height_diff(parent.left) > 0 :
                parent = rotateLL(parent)
            else:
                parent = rotateLR(parent)
                
        elif hDiff < -1:
            if calc_height_diff(parent.right) < 0:
                parent = rotateRR(parent)
            else:
                parent = rotateRL(parent)
        return parent
    
    
    def insert_avl(parent, node):
        if node.key < parent.key:
            if parent.left != None:
                parent.left = insert_avl(parent.left, node)
            else:
                parent.left = node
            return reBalance(parent)
        
        elif node.key > parent.key :
            if parent.right != None:
                parent.right = insert_avl(parent.right, node)
            else:
                parent.right = node
            return reBalance(parent)
        else:
            print("중복된 키 에러")