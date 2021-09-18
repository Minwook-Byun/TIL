const express = require('express')
const app = express()
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');

const MongoClient = require('mongodb').MongoClient
var db; //변수 하나 필요
MongoClient.connect('mongodb+srv://admin:Lifesecurity!@cluster0.xen2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (에러, client) {
    if (에러) return console.log(에러)
    db = client.db('todoapp');

    app.post('/add', function (req, res) {
        //누군가가 form에서 /add로 포스트 요청을 하면,
        res.send('전송완료!');
        //db.counter 내의 총 게시물 갯수를 찾음 
        db.collection('counter').findOne({
            name: 'PostNumber'
            //name을 가져와라        
        }, function (에러, 결과) {
            console.log(결과.totalPost)
            //총 게시물 갯수를 변수에 저장 
            let 총게시물갯수 = 결과.totalPost;

            db.collection('post').insertOne({
                    _id: 총게시물갯수 + 1,
                    title: req.body.title,
                    date: req.body.date
                }),
                function (에러, 결과) {
                    console.log('몽고디비로 전송완료!');
                }
                //카운터에서 네임이 죠런 것을 찾아서
                // 총게시물 갯수 +1을 해줘라 
            db.collection('counter').updateOne({
                    name: 'PostNumber'
                }, {
                    $inc: {
                        totalPost: 1
                    }
                    //set(변경, operator => 바꿔주세요)
                    // {set: {totalPost: 바꿀값}}
                    // {inc:{totalPost: 증가시킬 값}}
                },
                function () {
                    console.log('증가완료');
                    console.log(결과.totalPost)
                }
            )
        });

    });

    app.listen(8080, function () {
        console.log('listening on 8080')
    });
});

app.get('/list', (req, res) => {
    db.collection('post').find().toArray(function (error, result) {
        console.log(result);
        res.render('list.ejs', {
            postcontents: result
        });
    })
})

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