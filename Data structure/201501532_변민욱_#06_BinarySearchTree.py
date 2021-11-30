# 201501532_변민욱_#06_BinarySearchTree.py
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
        # self.node = node
        # self.root = root
        if parent is None:
            root = None 
        else:
            if parent.left == node:
                parent.left == None
            else: 
                parent.right = None 
        return root 
            
    def delete_bst_case2 (self, parent, node, root):
        if node.left is not None: # 삭제할 노드가 왼쪽 자식만 
            child = node.left   #child는 왼쪽 자식 
        else:                   #삭제할 노드가 오른쪽 자식만 가짐 
            child = node.right # child는 오른쪽 자식 
            
        if node == root:    #없애려는 노드가 루트 
            root = child    #이제 child가 새로운 루트 
        else:
            if node is parent.left: #삭제할 노드가 부모의 왼쪽 자식 
                parent.left = child # 부모의 왼쪽 링크를 변경
            else:
                parent.right = child #부모의 오른쪽 링크를 변경 
                
        return root #root가 변경될 수도 있으므로 반환 

    def delete_bst_case3(self, parent, node, root):
        succp = node                #후계자의 부모 노드
        succ = node.right           #후계자 노드 
        while (succ.left != None):  #후계자와 부모노드 검색 
            succp = succ 
            succ = succ.left 
            
        if(succp.left == succ):     #후계자가 왼쪽 자식이면
            succp.left = succ.right #후계자의 오른쪽 자식 연결 
        else:                       #후계자가 오른쪽 자식이면
            succp.right = succ.right#후계자의 왼쪽 자식 역할 
            
        node.key = succ.keyword     #후계자의 키와 값을 
        node.value = succ.value     #삭제할 노드에 복사
        node = succ                 #실제로 삭제하는 것은 후계자 노드
        
        return root                 #일관성을 위해 root 반환
    
    def delete(self, root, key):
        if root == None: return None
        
        parent = None 
        node = root 
        while node != None and node.key != key:
            parent = node 
            if key < node.key : node = node.left
            else: node = node.right 
            
        if node == None : return None 
        if node.left == None and node.right == None:
            root = self.delete_bst_case1(parent, node, root)
        elif node.left == None or node.right == None:
            root = self.delete_bst_case2(parent, node, root)
        else:
            root = self.delete_bst_case3(parent, node, root)
        return root 
    

# 추가적으로 구현한 함수 =================================================
    
# class BSTNode:
#     def __init__(self, val=None):
#         self.left = None
#         self.right = None
#         self.val = val

#     def insert(self, val):
#         if not self.val:
#             self.val = val
#             return

#         if self.val == val:
#             return

#         if val < self.val:
#             if self.left:
#                 self.left.insert(val)
#                 return
#             self.left = BSTNode(val)
#             return

#         if self.right:
#             self.right.insert(val)
#             return
#         self.right = BSTNode(val)

#     def get_min(self):
#         current = self
#         while current.left is not None:
#             current = current.left
#         return current.val

#     def get_max(self):
#         current = self
#         while current.right is not None:
#             current = current.right
#         return current.val

#     def delete(self, val):
#         if self == None:
#             return self
#         if val < self.val:
#             if self.left:
#                 self.left = self.left.delete(val)
#             return self
#         if val > self.val:
#             if self.right:
#                 self.right = self.right.delete(val)
#             return self
#         if self.right == None:
#             return self.left
#         if self.left == None:
#             return self.right
#         min_larger_node = self.right
#         while min_larger_node.left:
#             min_larger_node = min_larger_node.left
#         self.val = min_larger_node.val
#         self.right = self.right.delete(min_larger_node.val)
#         return self

#     def exists(self, val):
#         if val == self.val:
#             return True

#         if val < self.val:
#             if self.left == None:
#                 return False
#             return self.left.exists(val)

#         if self.right == None:
#             return False
#         return self.right.exists(val)

#     def preorder(self, vals):
#         if self.val is not None:
#             vals.append(self.val)
#         if self.left is not None:
#             self.left.preorder(vals)
#         if self.right is not None:
#             self.right.preorder(vals)
#         return vals

#     def inorder(self, vals):
#         if self.left is not None:
#             self.left.inorder(vals)
#         if self.val is not None:
#             vals.append(self.val)
#         if self.right is not None:
#             self.right.inorder(vals)
#         return vals

#     def postorder(self, vals):
#         if self.left is not None:
#             self.left.postorder(vals)
#         if self.right is not None:
#             self.right.postorder(vals)
#         if self.val is not None:
#             vals.append(self.val)
#         return vals