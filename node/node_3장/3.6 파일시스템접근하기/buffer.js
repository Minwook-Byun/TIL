const buffer = Buffer.from('나를 버퍼로 바꿔보셈!!')
console.log('from():', buffer); //from(): <Buffer eb 82 98 eb a5 bc 20 eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 eb b3 b4 ec 85 88 21 21>
console.log('length:', buffer.length); //length: 31
console.log('toString():', buffer.toString()); //toString(): 나를 버퍼로 바꿔보셈!!

const array = [Buffer.from('띄엄 '),Buffer.from('띄엄 '),Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString()); // concat(): 띄엄 띄엄 띄어쓰기

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3); //alloc(): <Buffer 00 00 00 00 00>