def make_morse_tree():
    root = TNode(None, None, None)
    for tp in table: 
        code = tp[1]    #모스 코드 
        node = root
        
    for c in code :     #맨 마지막 문자 이전까지 이동 
        if c == '.':    #왼쪽으로 이동 
            if node.left == None: 
                node.left = Tnode(None, None, None) #비었으면 빈 노드 만들기 
            node=node.left  
        elif c == '-':  
            if node.right == None:      #오른쪽으로 이동, 비었으면 
                node.right = Tnode(None, None, None) #새로운 노드 만들기 
            node = node.right       #그쪽으로 이동
        
    node.data = tp[0]   #코드의 알파벳 
return root 
        