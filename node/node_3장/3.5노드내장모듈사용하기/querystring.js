const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
// querystring.parse(): [Object: null prototype] {
//     page: '3',
//     limit: '10',
//     category: [ 'nodejs', 'javascript' ]
//   }
console.log('querystring.stringify():', querystring.stringify(query));
//querystring.stringify(): page=3&limit=10&category=nodejs&category=javascript
