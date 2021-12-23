console.log('require가 가장 위에 오지 않아도 됩니다');
module.exports = '저를 찾아보세요';
require('./var')
console.log('require.cache입니다.')
console.log(require.cache); //require.cache입니다.
console.log('require.main입니다.')
console.log(require.main === module); //true
console.log(require.main.filename); // c:\coding\TIL\node\node_3장\require.js