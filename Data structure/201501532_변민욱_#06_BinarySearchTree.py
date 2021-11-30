# 이진탐색트리 클래스 BST를 정의하고 삽입, 삭제, 탐색 연산을 실행하시오.
class BSTNode:
    def __init__(self,key,value):
        self.key = key
        self.value = value
        self.left = None
        self.right = None
    
    # 탐색 연산
    def search_bst(self, key):
        if self == None: return None
        elif key == self.key:
            return self
        elif key < self.key:
            return self.left.search_bst(key)
        else:
            return self.right.search_bst(key)
  
    def search_max_bst(self):
        while self != None and self.right != None: 
            self = self.right 
        return self
    
    def search_min_bst(self):
        while self != None and self.left != None:  
            self = self.left
        return self 
    
    def insert_bst(self, r):
        if self.key < r.key:
            if r.left is None:
                r.left = self
                return True
            else:
                return self.insert_bst(r.left, self)
        elif self.key > r.key:
            if r.right is None:
                r.right = self
                return True
            else:
                return self.insert_bst(r.right, self)
        else:
            return False
        
        #삭제 연산      
    def delete_bst_case1(self,parent,node,root):
        self.node = node
        self.root = root
        if parent is None:
            root = None 
            
        else:
            if parent.left == node:
                parent.left == None
            else: 
                parent.right = None 
        return root 
            