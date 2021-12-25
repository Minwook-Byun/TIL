const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'))
//base64: dvfV6nyLRRt3NxKSlTHOkkEGgqW2HRtfu19Ou/psUXvwlebbXCboxIPmDYOFRIpqav2eUTBFuHaZri5x+usy1g==
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'))
//hex: 76f7d5ea7c8b451b773712929531ce92410682a5b61d1b5fbb5f4ebbfa6c517bf095e6db5c26e8c483e60d8385448a6a6afd9e513045b87699ae2e71faeb32d6
console.log('base64:', crypto.createHash('sha512').update('다른비밀번호').digest('base64'))
//base64: H3wpOArA9Md5f6APVAK7kZxe4KLj9bu1OYfDTzObcO5z4+TGEtj8L5T+hF+nEJM+O205Je5uCGS7UTzQ5fgqDw==
