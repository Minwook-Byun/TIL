MAX_QSIZE = 10
class CircularQueue :
    def __init__(self):
        self.front = 0
        self.rear = 0
        self.items = [None] * MAX_QSIZE
        
    def enqueue(self, item):
        if not self.isFull():
            self.rear = (self.rear+1)%MAX_QSIZE
            self.items[self.rear] = item
            
    def dequeue(self):
        if not self.isEmpty():
            self.front = (self.front +1) %MAX_QSIZE
            return self.items[self.front]

    def isEmpty(self): return self.front == self.rear
    def isFull(self): return self.front == (self.rear+1)%MAX_QSIZE
    def clear(self): return self.front == self.rear    
    
class TNode:								
    def __init__ (self, data, left, right):	
        self.data = data 					
        self.left = left					
        self.right = right					

def preorder(n) :				
    if n is not None :
        print(n.data, end=' ')	
        preorder(n.left)		
        preorder(n.right)		

def inorder(n) :				
    if n is not None :
        inorder(n.left)			
        print(n.data, end=' ')	
        inorder(n.right)		

def postorder(n) :
    if n is not None :
        postorder(n.left)
        postorder(n.right)
        print(n.data, end=' ')


def levelorder(root) :
    queue = CircularQueue()			
    queue.enqueue(root)				
    while not queue.isEmpty() :		
        n = queue.dequeue()			
        if n is not None :
            print(n.data, end=' ')	
            queue.enqueue(n.left)	
            queue.enqueue(n.right)	

def count_node(n) :
    if n is None : 
        return 0
    else : 			
        return 1 + count_node(n.left) + count_node(n.right)

def count_leaf(n) :
    if n is None :	
        return 0
    elif n.left is None and n.right is None :
        return 1
    else : 		
        return count_leaf(n.left) + count_leaf(n.right)


def calc_height(n) :
    if n is None : 					
        return 0
    hLeft = calc_height(n.left)		
    hRight = calc_height(n.right)	
    if (hLeft > hRight) : 			
        return hLeft + 1
    else: 
        return hRight + 1

################################
d = TNode('D', None, None)
g = TNode('G', None, None)
h = TNode('H', None, None)
e = TNode('E', g, h)
f = TNode('F', None, None)
b = TNode('B', d, None)
c = TNode('C', e, f)
root = TNode('A',b,c)

print('================================\n실습문제 8.1의 왼쪽 트리')
print('\n   In-Order : ', end='')
inorder(root)
print('\n  Pre-Order : ', end='')
preorder(root)
print('\n Post-Order : ', end='')
postorder(root)
print('\nLevel-Order : ', end='')
levelorder(root)
print()

print(" 노드의 개수 = %d개" % count_node(root))
print(" 단말의 개수 = %d개" % count_leaf(root))
print(" 트리의 높이 = %d" % calc_height(root))

A = TNode('A', None, None)
B = TNode('B', None, None)
level4_div= TNode('/', A, B)
C = TNode('C', None, None)
level3_mul = TNode('*',level4_div, C)
D = TNode('D', None, None)
level2_mul = TNode('*',level3_mul,D)
E = TNode('E', None, None)
root = TNode('+', level2_mul, E)

print('\n================================\n실습문제 8.2의 오른쪽 트리')
print('\n   In-Order : ', end='')
inorder(root)
print('\n  Pre-Order : ', end='')
preorder(root)
print('\n Post-Order : ', end='')
postorder(root)
print('\nLevel-Order : ', end='')
levelorder(root)
print()

print(" 노드의 개수 = %d개" % count_node(root))
print(" 단말의 개수 = %d개" % count_leaf(root))
print(" 트리의 높이 = %d" % calc_height(root))