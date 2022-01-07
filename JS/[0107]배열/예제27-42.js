// 예제 27-42
console.log(Array.isArray([])) //true
a = [1, 2, 3, 4]
console.log(Array.isArray(a)) //true
console.log(Array.isArray()) //false

// 예제 27-43
a.push(2);
console.log(a.indexOf(2)); //1
console.log(a.indexOf(100)); //-1, 100은 없으므로 

// 예제 27-44 응용
const 내학점 = ['a+','b+','b0','c+']

//내학점 배열에 'F'가 있는지 확인한다 
if(내학점.indexOf('f') !== -1){
    console.log('F학점이 있습니다')
}
else{
    console.log('F학점이 없습니다')
}


// 예제 27-45 응용
const 놓친학점 = 'a0'
if(!내학점.includes(놓친학점)){
    내학점.push(놓친학점);
    내학점.sort() // 정렬 안해주면 맘이 불편함 
}
console.log(내학점)


