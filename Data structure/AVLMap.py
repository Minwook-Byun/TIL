from BSTMap import*

class AVLMap(BSTMap):       # 클래스 선언 
    def __init__(self):     # 생성자 함수 
        super().__init__()  #부모(BSTMap) 클래스의 생성자 호출
        
    def insert(self, key, value=None):
        n = BSTNode(key, value)
        if self.isEmpty():
            self.root = n
        else:
            self.root = insert_avl(self.root, n)
            
    def display(self, msg = 'AVLMap: '):
        print(msg, end='')
        levelorder(self.root)
        print()