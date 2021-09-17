const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://admin:Lifesecurity@cluster0.xen2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (에러, client) {
    app.listen(8080, function () {
        console.log('listening on 8080')
    });
})


app.listen(8080, function () {
    console.log('listening on 8080')
});

// 누군가가 /pet으로 방문을 하면 
// pet관련된 안내문을 띄워주자 

app.get('/pet', function (요청, 응답) {
    응답.send('펫용품을 쇼핑할 수 있는 페이지입니다')
})

// 여기는 암기의 영역이다. 
app.get('/beauty', function (요청, 응답) {
    응답.send('뷰티용품을 쇼핑할 수 있는 페이지입니다')
})

// /하나만 쓰면 홈 sendFile은 html 보낼 수 있다
app.get('/', function (요청, 응답) {
    응답.sendFile(__dirname + '/index.html')
});

app.get('/write', (요청, 응답) => {
    응답.sendFile(__dirname + '/write.html')
});

// 어떤사람이 /add 경로로 post요청을 하면 .. ??을 해주세요 

app.post('/add', (req, res) => {
    res.send('전송완료');
    console.log(req.body.title);
    console.log(req.body.date);
    // DB에 저장해주세요
})

// input 에 적은 정보는 어딨지? => req에 저장되어 있음 => body parser
// 데이터 해석을 도와준다. 
// form의 데이터의 경우 input들에 name을 써주기