const exec = require('child_process').exec;

const process = exec('dir');

process.stdout.on('data', function (data) {
    console.log(data.toString());
}) // 실행결과

process.stderr.on('data', function (data) {
    console.log(data.toString())
}) // 실행 에러 