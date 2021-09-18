const express = require('express');
const app = express()
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('source'));
app.use(express.static('JS'));
app.use(express.static('css'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    db.collection('reply').find().toArray(function (error, result) {
        console.log(result);
        res.render('index.ejs', {
            replycontents: result
        });
    })
})


//=== section for Reply using MongoDB ===
const MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect('mongodb+srv://admin:Lifesecurity!@cluster0.xen2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (error, result) {
    if (error) return console.log('error!')
    db = result.db('LifeLabServer');

    app.post('/add', function (req, res) {
        res.send('connecting to sever!')
        db.collection('ReplyCounter').findOne({
            name: 'totalReply'
        }, function (error, result) {
            console.log(result.replyCount)
            let totoalReplyCount = result.replyCount;

            db.collection('reply').insertOne({
                    _id: totoalReplyCount + 1,
                    작성자: req.body.writer,
                    내용: req.body.content
                }),
                function () {
                    console.log('sending to mongodb')
                }

            db.collection('ReplyCounter').updateOne({
                    name: 'totalReply'
                }, {
                    $inc: {
                        replyCount: 1
                    }
                },
                function () {
                    console.log('증가완료');
                    console.log(result.replyCount);
                });
        });
    });
    app.listen(8080, function () {
        console.log('listening on 8080')
    });
})





// ===additional pages for reply===
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/write', function (req, res) {
    res.sendFile(__dirname + '/write.html')
});