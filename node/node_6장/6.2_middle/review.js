const morgan = require("morgan");

app.use((req,res,next) => {
    console.log('요청이 다 실행됩니다');
    next();
});


app.use(
    morgan('dev'),
    express.static('/', path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended: false }),
    cookieParser(process.env.COOKIE_SECRET),
)

app.use((req, res, next)=>{
    req.data = '데이터 넣기';
    next();
}, (req, res, next)=>{
    console.log(req.data); //데이터 받기 
    next();
});

app.use(morgan('dev'));
//또는 
app.use((req, res, next)=>{
    morgan('dev')(req, res, next);
});

app.use((req, res, next)=>{
    if(process.env.NODE_ENV === 'production'){
        morgan('combined')(req, res, next);
    } else {
        morgan('dev')(req, res, next);
    }
});

