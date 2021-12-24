const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로의 구분자: \
console.log('path.delimiter:',path.delimiter) // ; 환경변수의 구분자 
console.log('path.dirname:', path.dirname(string)) 
// c:\coding\TIL\node\node_3장\3.5노드내장모듈사용하기
// 파일이 위치한 폴더 경로를 보여준다 
console.log('path.extname:', path.extname(string)) // .js 파일의 확장자를 보여줌
console.log('path.basename:', path.basename(string)) // path.js 
// 파일의 이름(확장자 포함)을 표시. 파일의 이름만 표시하고 싶다면 basename의 두번째 인수로 파일의 확장자를 넣으면 됨
console.log('path.parse:', path.parse(string))
// path.parse: {  파일 경로를 root, dir, base, ext, name으로 분리 
//     root: 'c:\\',
//     dir: 'c:\\coding\\TIL\\node\\node_3장\\3.5노드내장모듈사용하기',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }
console.log('path.normalize():', path.normalize('c:\\\\coding\\\TIL\\node\\node_3장\\3.5노드내장모듈사용하기'))  
//path.normalize(): c:\coding\TIL\node\node_3장\3.5노드내장모듈사용하기
// \나 /를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변경
console.log('path.isAbsolute(C:\\)', path.isAbsolute('C:\\'))
//path.isAbsolute(C:\) true
//파일의 경로가 절대경로인지 상대경로인지 true인지 false인지 알립니다. 
console.log(path.join('/a','/b','c')) //\a\b\c
console.log(path.resolve('/a','/b','c')) //c:\b\c