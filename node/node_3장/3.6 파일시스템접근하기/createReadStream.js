const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunck)=>{
    data.push(chunck);
    console.log('data:', chunck, chunck.length);
})

readStream.on('end', ()=>{
    console.log('end:', Buffer.concat(data).toString());
});

readStream.on('error',(err)=>{
    console.log('error:', err);
})

// data: <Buffer eb 82 98 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9> 16
// data: <Buffer 20 ec a1 b0 ea b8 88 ec 94 a9 20 eb 82 98 eb 88> 16
// data: <Buffer a0 ec 84 9c 20 ec a0 84 eb 8b ac eb 90 9c eb 8b> 16
// data: <Buffer a4 2e 20 eb 82 98 eb 88 a0 ec a7 84 20 ec a1 b0> 16
// data: <Buffer ea b0 81 ec 9d 84 20 63 68 75 6e 6b eb 9d bc ea> 16
// data: <Buffer b3 a0 20 eb b6 80 eb a5 b8 eb 8b a4 2e 20> 14
// end: 나는 조금씩 조금씩 나눠서 전달된다. 나눠진 조각을 chunk라고 부른다. 
