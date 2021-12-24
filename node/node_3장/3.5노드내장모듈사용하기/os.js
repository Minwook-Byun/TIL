const os = require('os');

console.log('운영체제 정보------------------------')
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release:', os.release());

//운영체제 정보------------------------
// os.arch(): x64
// os.platform(): win32
// os.type(): Windows_NT
// os.uptime(): 117736
// os.hostname(): LAPTOP-O4AR8T5P
// os.release: 10.0.19043

console.log('경로--------------------------------')
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());
// os.homedir(): C:\Users\보람!
// os.tmpdir(): C:\Users\보람!\AppData\Local\Temp

console.log('cpu정보------------------------------')
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length', os.cpus().length)
// {
//     model: 'AMD Ryzen 5 3500U with Radeon Vega Mobile Gfx  ',
//     speed: 2096,
//     times: {
//       user: 3302234,
//       nice: 0,
//       sys: 4374812,
//       idle: 45345875,
//       irq: 35718
//     }
//   }
// ]
// os.cpus().length 8
console.log('메모리정보--------------------------------')
console.log(os.freemem()) //357261312
console.log(os.totalmem()) //3693654016
