const url = require('url');

const {URL} = url;
const MYURL = new URL ('https://velog.io/@boram_in');
console.log('new URL():', MYURL);
console.log('url.format():', url.format(MYURL));

const parsedUrl = url.parse('https://velog.io/@boram_in')
console.log('url.parse():', parsedUrl)
console.log('url.format():', url.format(parsedUrl));