const {URL} = require('url');

const myURL = new URL('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
// //searchParams: URLSearchParams {
//     'page' => '3',
//     'limit' => '10',
//     'category' => 'nodejs',
//     'category' => 'javascript' }
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
// searchParams.getAll(): [ 'nodejs', 'javascript' ]
// 키에 해당하는 모든 값들을 가져온다. category엔 nodejs와 javascript 라는 두가지 값이 들어 있음
console.log('searchParams.get():', myURL.searchParams.get('limit'));
//searchParams.get(): 10
// console.log('searchParmas.has():', myURL.searchParmas.has('page'));
// 키에 해당하는 첫 번째 값만 가져옴

console.log('searchParams.key():', myURL.searchParams.keys());
//searchParams.key(): URLSearchParams Iterator { 'page', 'limit', 'category', 'category' }
//searchParams의 모드 키를 반복기(iterator) 객체로 가져온다 

console.log('searchParams.values():', myURL.searchParams.values());
//searchParams.values(): URLSearchParams Iterator { '3', '10', 'nodejs', 'javascript' }
//searchParams의 모든 값을 반복기 객체로 가져옴 

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
// append(키, 값)
// 해당 키를 추가함. 같은 키의 값이 있다면 유지하고 하나 더 추가 

myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));
//[ 'es6' ]
// set(키, 값) : append와 비슷하지만, 같은 키의 값들을 모두 지우고 새로 추가 

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));
//[] 
// 해당 키를 제거한다 

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
//searchParams.toString(): page=3&limit=10&category=nodejs&category=javascript
// 조작한 searchParmas 객체를 다시 문자열로 만든다. 이 문자열을 search에 대입하면 주소 객체에 반영됨. 

