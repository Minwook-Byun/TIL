app.use(session({
    resave : false,
    saveUninitialized : false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true, 
        secure: false,
    },
    name: 'session-cookie'
}));

req.session.name = 'boram'; // 세션 등록
req.sessionID; // 세션 아이디 확인
req.session.destroy(); // 세션 모두 제거 