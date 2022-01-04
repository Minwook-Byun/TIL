const path = require('path');
const router = require('./routes');

dotenv.config();
const indexRouter = require('./routes');
const userRouter = require('./routes/user')
name: 'session-cookie',


app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found')
})

router.get('/', function(req, res, next){
    next('route');
}, function(req, res, next){
    console.log('실행되지 않음!')
    next();
}, function(req, res, next){
    console.log('실행되지 않음!')
    next();
});

router.get('/', function(req, res){
    console.log('실행됨!')
    res.send('hello express!')
});

router.get('/user/:id', function(req,res){
    console.log(req.params, req.query)
});

router.get('/user/:id', function(req,res){
    console.log('얘만 실행된다~')
});
router.get('/user/like', function(req,res){
    console.log('전혀 실행되지 않는다');
});