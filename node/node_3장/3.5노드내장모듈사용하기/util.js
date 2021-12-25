const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
}, '요 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);
// 3
// (node:11788) DeprecationWarning: 요 함수는 deprecated되었으니 더 이상 사용하지 마세요!
// (Use `node --trace-deprecation ...` to show where the warning was created)

const randomBytePromise = util.promisify(crypto.randomBytes);
randomBytePromise(64)
    .then((buffer) => {
        console.log(buf.toString('base64'));
    })
    .catch((err) => {
        console.error(error);
    })