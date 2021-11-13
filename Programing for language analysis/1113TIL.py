nums = [0,1,2,3,4,5]
del nums[1:5]
print(nums)

nums = [0,1,2,3,4,5]
nums.pop()
print(nums) #[0, 1, 2, 3, 4]
nums.pop()
print(nums) #[0, 1, 2, 3]

nums = [0,1,2,3,4,5]
nums[1:2] = []
print(nums) #[0, 2, 3, 4, 5]
a = [1,2,3]
for i in a:
    print(i*2, end=' ')

Search_result = input('검색:')
nums= [5,1,7,3,5]
print(type(Search_result))
print(nums.count(int(Search_result)))

### 정렬(Sorting)
# 오름차순으로 정렬하려면 sort() 메소드를 입력값 없이 사용하고 내림차순으로 정렬하려면 reverse = True 옵션을 사용하면 된다. 
nums = [3,5,2,1,5,3]
nums.sort()
print(nums)

nums = [3,5,2,1,5,3]
nums.sort(reverse= True)
print(nums)

fruitdb = [['apple', 1020], ['orange', 880], ['grape',3160]]
print(fruitdb[1])
print(fruitdb[1][0])

#### 튜플(tuples) 
# 튜플은 초기화한 후 변경할 수 없는(immutable) 배열이며 리스트의 대괄호가 아닌 괄호()로 묶인 형식이다. 
tuples = ()
animals = ('토끼', '사자', '원숭이')
print(animals[1]) #사자
print(animals[1:3]) #('사자', '원숭이')
animals[1] = '키위새' ##TypeError: 'tuple' object does not support item assignment
# 이것은 튜플은 immutable 배열이라는 의미이며 튜플은 한 번 입력한 내용을 변경할 수 없도록 설계되어 있다. 

animals = ('토끼', '사자', '원숭이')
fruits = '사과', '오렌지', 1020, 88
things = animals + fruits
print('사과' in things)
print('사과' not in things)

a = 1,2,3
b = a * 2 
print(b) #(1, 2, 3, 1, 2, 3)
print(len(b)) #6
print(b.count(3))
print(b.index(2))

name = '보람'
age = 26
height = 175
print('이름: {} 나이: {} 키: {}' .format(name,age,height))

#Q5.17
pack = [(0,0), (1,1), (2,4), (3,9), (4,16)]
for (x,y) in range(len(pack)):
    # i 일 때 ,print(pack[i][0], pack[i][1]) 
    print(x,y)

student = {}
student['보람'] = 2015000
print(student)
student['보람2'] = 2016000
print(student) #{'보람': 2015000, '보람2': 2016000}

fruitdb = {'apple': 400, 'orange':800, 'grape':4000}
print(fruitdb[1]) #{'apple': 400, 'orange': 800, 'grape': 4000}
print(fruitdb[1:2])

fruitdb = {'apple': 400, 'orange':800, 'grape':4000}
del fruitdb['apple']
print(fruitdb) #{'orange': 800, 'grape': 4000}
print('banana' in fruitdb) #False
print(fruitdb.get('grape')) #4000
print(fruitdb.keys()) # 키들 출력: dict_keys(['orange', 'grape'])
print(fruitdb.values()) #밸류들 출력: dict_values([800, 4000])
print(fruitdb.items()) #전체 출력: dict_items([('orange', 800), ('grape', 4000)]) 

fruitStore = {'apple': 400, 'orange':800, 'grape':4000}
newFruit = {'honsi':5000}
fruitStore.update(newFruit)
print(fruitStore)

person = {'name': 'boram', 'age':26, 'height':173}
print('이름:{0[name]}, 나이:{0[age]}, 키:{0[height]}'.format(person)) #이름:boram, 나이:26, 키:173

training_data = [['연두', 3, '사과'], ['노랑', 3, '사과'], ['빨강', 2, '포도'], ['빨강', 1, '포도'], ['노랑', 3, '레몬']]

def fruit_counts(data):
    counts: {}
    for row in data:
        label = row[-1]
        if label not in counts:
            counts[label] = 0
        counts[label] += 1
    return counts
result = fruit_counts(training_data)
print(result)