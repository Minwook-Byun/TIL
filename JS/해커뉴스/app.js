const ajax = new XMLHttpRequest();
const content = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; // 바뀔 수 있는 데이터는 빼서 선언해준다
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json'

ajax.open('GET', NEWS_URL , false); //false : 동기적으로 처리하겠다는 뜻 
ajax.send();

// ajax를통해 가져오면, 개발자 도구의 network - XHR 에서 확인할 수 있다. 
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');


window.addEventListener('hashchange', function(){
    console.log('동작!');
    const id = location.hash.substr(1); //이후의 값만 출력해준다
    ajax.open('GET', CONTENT_URL.replace('@id', id), false);
    ajax.send(); //다시 보내주고

    const newsContents = JSON.parse(ajax.response);
    const title = document.createElement('h1');
    
    title.innerHTML = newsContents.title
    
    content.appendChild(title);
    console.log(newsContents);
});


for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');

    li.innerHTML = `<a href="#${newsFeed[i].id}">
    ${newsFeed[i].title} [${newsFeed[i].comments_count}]
    </a>`;

    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul)
document.getElementById('root').appendChild(content)