const { RSA_NO_PADDING } = require("constants");
const { resolve } = require("path/posix");

let todos; 

const get = url => {
    const xhr =  new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload=()=>{
        if(xhr.status === 200){
            // 서버의 응답을 콘솔에 출력한다. 
           todos = (JSON.parse(xhr.response));
        } else {
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    };
};

get('https://jsonplaceholder.typicode.com/post/1');
console.log(todos);



// let g = 0;
// setTimeout(()=>{
//     g = 100;
// }, 0);

// console.log(g) //0


const get = (url, 성공, 실패) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200){
            // 서버 응답을 콜백 함수에 인수로 전달하면서 호출하여 응답에 대한 후속처리
            성공(JSON.parse(xhr.response));
        }else{
            // 에러 정보를 콜백함수로부터 인수로 전달하면서 호출해 에러 처리를 한다
            실패(xhr.status);
        }
    };
};

get('https://jsonplaceholder.typicode.com/post/1', console.log, console.error); 


try {
    setTimeout(()=> {throw new Error('Error');}, 1000);
} catch (e){
    console.error('캐치한 에러', e);
}

// const promise = new Promise((resolve, reject)=>{
//     if(/*성공*/) {
//         resolve('result');
//     }else{
//         reject('failure reason')
//     }
// })


const promiseGet = url => {
    return new Promise((성공, 실패)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if(xhr.status === 200){
                성공(JSON.parse(xhr.response));
            }else{
                실패(new Error(xhr.status));
            }
        }
    })
}

promiseGet('https://jsonplaceholder.typicode.com/post/1')


// fulfiled
new Promise(resolve => resolve('fulfiled'))
.then (v => console.log(v), e => console.error(e));

// rejected
new Promise ((_,reject)=> reject(new Error('rejected')))
.then(v => console.log(v), e => console.error(e));


new Promise((_,reject)=> reject(new Error('rejected')))
.catch(e=> console.log(e));


new Promise(()=>{})
.finally(()=>console.log('finally'));

const promiseGet = url => {
    return new Promise((성공, 실패)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if(xhr.status === 200){
                성공(JSON.parse(xhr.response));
            }else{
                실패(new Error(xhr.status));
            }
        };
    });
};

promiseGet('https://jsonplaceholder.typicode.com/post/1')
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(()=>console.log('bye!'))



const wrongUrl = 'https://jsonplaceholder.typicode.com/xxxxxx/1';

//부적절한 URL이 저장되었기에 에러가 발생한다 
promiseGet(wrongUrl).then(
res => console.log(res),
err => console.log(err)
)

const wrongUrl = 'https://jsonplaceholder.typicode.com/post/1';
promiseGet(wrongUrl)
.then(res => console.log(res))
.catch(err => console.error(err))


// catch 메서드를 호출하면 내부적으로 then을 호출한다. 
const wrongUrl = 'https://jsonplaceholder.typicode.com/post/1';
promiseGet(wrongUrl)
.then(res => console.log(res))
.then(undefined => console.error(err))

const url = 'https://jsonplaceholder.typicode.com/post/1';

promiseGet(`${url}/post1`)
    .then(({userId})=> promiseGet(`${url}/users/`))
    .then(userInfo => console.log(userInfo))
    .catch(err=>console.error(err));


const resolvedPromise = Promise.resolve([1,2,3]);
resolvedPromise.then(console.log);

const rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.log);


const requestData1 = () => 
    new promise(resolve => setTimeout(()=> resolve(1), 3000));
const requestData2 = () => 
    new promise(resolve => setTimeout(()=> resolve(1), 3000));
const requestData3 = () => 
    new promise(resolve => setTimeout(()=> resolve(1), 3000));



const res = []
requestData1
    .then(data=>{
        res.push(data);
        return requestData2
    })
    .then(data=>{
        res.push(data);
        return requestData3();
    })
    .then(data=>{
        res.push(data);
        console.log(res) //[1,2,3] 6초 소요
    })
    .catch(console.error)



setTimeout(()=> console.log(1),0);

promise.resolve()
.then(()=>console.log(2)) 
.then(()=>console.log(3))


fetch('https://jsonplaceholder.typicode.com/post/1')
// res는 HTTP 응답을 나타내는 Resopnse 객체다. 
// JSON 매서드를 사용해 res 객체에서 HTTP request body를 취득해서 역직렬화한다. 
.then(res => res.json())
// json은 역직렬화한 HTTP request body
.then(json=>console.log(json))



const request = {
    get(url){
        return fetch(url);
    }, 
    post(url, payload){
        return fetch(url,{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(payload)
        });
    },
    patch(url, payload){
        return fetch(url,{
            method:'PATCH',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(payload)
        });
    },
    delete(url){
        return fetch(url, {method:'DELETE'});
    }
};

// GET 요청 
request.get('https://jsonplaceholder.typicode.com/post/1')
.then(res => res.json())
.then(todos => console.log(todos))
.catch(err=>console.error(err));
// { userId:1 ... }

request.post('https://jsonplaceholder.typicode.com/post/1',{
    userId : 1,
    title  : 'javaScript',
    completed : false
}).then(res => res.json())
.then(todos => console.log(todos))
.catch(err => console.error(err));

request.patch('https://jsonplaceholder.typicode.com/post/1',{
    completed : true 
}).then(res => res.json())
.then(todos => console.log(todos))
.catch(err=> console.error(err))
// true로 값이 패치된다 

request.delete('https://jsonplaceholder.typicode.com/post/1')
.then(res => res.json())
.then(todos => console.log(todos))
.catch(err=> console.error(err));
//{} 

