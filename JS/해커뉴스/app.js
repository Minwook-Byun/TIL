const container = document.getElementById('root')
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
    ajax.open('GET', CONTENT_URL.replace('@id', id), false); //replace 값을 변경시켜준다 
    ajax.send(); //다시 보내주고

    const newsContents = JSON.parse(ajax.response);
    const title = document.createElement('h1');
    
    title.innerHTML = newsContents.title
    
    content.appendChild(title);
    console.log(newsContents);
});


for (let i = 0; i < 10; i++) {
    const tempDiv = document.createElement('div'); //임시로 사용할 DOM 
    const li = document.createElement('li');
   
    // li.innerHTML = `<a href="#${newsFeed[i].id}">
    // ${newsFeed[i].title} [${newsFeed[i].comments_count}]
    // </a>`;

    tempDiv.innerHTML = `
    <li>
        <a href = "#${newsFeed[i].id}">
            ${newsFeed[i].title} [$${newsFeed[i].comments_count}]
        </a>
    </li>
    `

    // 그만해! DOM API를 이렇게 사용하다가는 코드를 다 읽어보지 않고서는 구조를 이해하기 어려워진다
    // 그래서 최대한 DOM API를 만들지 않고 문자열로 처리해보자 => 임시 Dom을 만들어준다 

    
    // ul.appendChild(li);
    ul.appendChild(tempDiv.firstElementChild); //li만 어떻게 넣어줄까. 
}

// document.getElementById('root').appendChild(ul)
// document.getElementById('root').appendChild(content)

// 원천이 바뀌면 2개를 모두 바꿔야 한다. 중복은 좋지 않다. 
// 그렇기 때문에 위에 container를 선언해주고 아래와 같이 수정해준다. 

container.appendChild(ul);
container.appendChild(content);