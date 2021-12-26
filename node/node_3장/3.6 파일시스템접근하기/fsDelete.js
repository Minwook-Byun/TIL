const fs = require('fs').promises;

fs.readdir('./folder')
    .then((dir) => {
        console.log('폴더내용확인', dir);
        return fs.unlink('./folder/newfile.js');
    })
    .then(() => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./folder');
    })
    .then(() => {
        console.log('폴더 삭제 성공')
    })
    .catch((err) => {
        console.error(err);
    })
    // 폴더내용확인 [ 'newfile.js' ]
    // 파일 삭제 성공
    // 폴더 삭제 성공
    