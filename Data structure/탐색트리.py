def search_bst(n, key):
    if n == None: return None
    elif key == n.key:
        return n
    elif key < n.key:
        return search_bst(n.left, key)
    else: 
        return search_bst(n.right, key)
    
    
def rotateLL(A):
    B = A.left
    A.left = B.right
    B.right = A
    return B