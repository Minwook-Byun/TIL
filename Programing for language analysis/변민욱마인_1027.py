from typing import Text


def swap(aa,bb):
    print('2:id(aa)', id(aa),'id(bb)', id(bb))
    return bb, aa

a=3
b=5
print('a=',a, 'b=', b)
print('3:id(a)', id(a), 'id(b):', id(b))
print('a=',a,'b=',b)

text = text = "AI! 나는 인공지능 로봇 입니다. 나는 'AI 로봇' 입니다."

def max_counts(text):
    counts = {}
    for i in text.split(' '):
        if i in counts:
            counts[i] += 1
        else:
            counts[i] = 1
    return counts
print(max_counts(text))

def max_counts(text):
    skips = ['.', ',', ';', ':', "'", '!']
    
    for ch in skips:
        text = text.replace(ch, '')
    
    counts = {}
    for i in text.split(' '):
        if i in counts:
            counts[i] += 1
        else:
            counts[i] = 1
    return counts
print(max_counts(text))

nums  = [1,1,1,2,2,3,2,3,3,3,1]
def max_counts(nums):
    counts={}
    for i in nums:
        if i in counts:
            counts[i] += 1
        else:
            counts[i] = 1
    return counts
counts = max_counts(nums)
first = []
max_num = max(counts.values())
for name, count in counts.items():
    print(name, ':', count, '번')
    if count == max_num:
        first.append(name)
print('1등: ', first)