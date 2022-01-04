res.cookie('name','boram', {
    expires: new Date(Date.now() + 900000),
    httpOnly: true, 
    secure: true,
});
res.clearCookie('name', 'boram', {httpOnly: true, secure: true});


