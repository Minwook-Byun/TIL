const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
.then(()=>{
    return Promise.reject('이미 폴더 있음')
})
.catch((err)=>{
    if(err.code === 'ENOENT') {
        console.log('폴더없음');
        return fs.mkdir('./folder');
    }
    return Promise.reject(err);
})
.then(()=>{
    console.log('폴더 만들기 성공');
    return fs.open('./folder/file.js', 'w');
})
.then((fd)=>{
    console.log('빈 파일 만들기 성공', fd);
    return fs.rename('./folder/file.js', './folder/newfile.js');
})
.then(()=>{
    console.log('이름바꾸기 성공');
})
.catch((err)=>{
    console.error(err)
})

// 폴더없음
// 폴더 만들기 성공
// 빈 파일 만들기 성공 FileHandle {
//   _events: [Object: null prototype] {},
//   _eventsCount: 0,
//   _maxListeners: undefined,
//   close: [Function: close],
//   [Symbol(kCapture)]: false,
//   [Symbol(kHandle)]: FileHandle {},
//   [Symbol(kFd)]: 3,
//   [Symbol(kRefs)]: 1,
//   [Symbol(kClosePromise)]: null
// }
// 이름바꾸기 성공
