function findAndSaveUser(Users){
    Users.findOne({}, (err, user) => {
        //첫번째 콜백
        if(err){
            return console.error(err);
        }
        user.name = 'boram';
        user.save((err) => {
            // 두번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m'}, (err, user) => {
                // 세번째 콜백 
                // 생략
            });
        });
    });
}

// ==============================

function findAndSaveUser(Users){
    Users.findOne({})
    .then((user) => {
        user.name = 'boram'
        return user.save();
    })
    .then((user) => {
        return Users.findOne({gender:'m'})
    })
    .then((user)=>{
        //생략
    })
    .catch(err=>{
        console.error(err);
    });
}

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
.then((result) => {
    console.log(result); //[성공1, 성공2]
})
.catch((err) => {
    console.error(err);
})

////////////////////////////////
//async await

async function findAndSaveUser(Users) {
    let user = await Users.findOne({});
    user.name = 'boram';
    user = await user.save();
    user = await Users.findOne({gender:'m'});
    //생략
}

async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({}); 
        user.name = 'boram';
        user = await user.save(); 
        user = await Users.findOne({ gender:'m' });
        //생략
    }
    catch(error){
        console.log(error);
    }
}

const findAndSaveUser = async (Users) => {
    try{
        let user = await Users.findOne({});
        user.name = 'boram';
        user = await user.save();
        user = await Users.findOne({gender:'m'});
    }
    catch(error){
        console.error(error);
    }
};

const promise1  = Promise.resolve('성공1')
const promise2 = Promise.resolve('성공2')
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();

<ul>
    <li data-id="1" data-user-job ="programmer">Borma</li>
    <li data-id="2" data-user-job ="designer">Porma</li>
    <li data-id="3" data-user-job ="programmer">Boram</li>
    <li data-id="4" data-user-job ="ceo">choram</li>
</ul>
