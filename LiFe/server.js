const express = require('express')
const app = express()
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('source'));
app.use(express.static('JS'));
app.use(express.static('css'));
app.set('view engine', 'ejs');



app.listen(9000, function () {
    console.log('listening on 9000')
});


// ===additional pages for reply===
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/write', function (req, res) {
    res.sendFile(__dirname + '/write.html')
});
