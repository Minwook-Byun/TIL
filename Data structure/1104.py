def printStep(arr, val):
    print("Step %2d= " %val, end='')
    print(arr)

# def selection_sort(A):
#     n = len(A)
#     for i in range(n-1):
#         least = i
#         for j in range(i+1, n):
#             if (A[j] < A[least]):
#                 least = j                
#         A[i], A[least] = A[least],A[i] #배열 항목 교환
#         printStep(A, i+1) # 중간 출력용 문장

# data = [5,3,8,4,9,1,6,2,7];
# print("Original: ", data)
# selection_sort(data)
# print("정렬 후: ", data)
                
     
def insertion_sort(A):
    n = len(A)
    for i in range(1,n) :
        key = A[i]
        j = i - 1
        while j >= 0 and A[j] > key:
            A[j+1] = A[j]
            j -= 1
        A[j+1] = key
        printStep(A,i)
        
        