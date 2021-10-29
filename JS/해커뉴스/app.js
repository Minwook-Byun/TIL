const ajax = new XMLHttpRequest();
const News_url ='https://api.hnpwa.com/v0/news/1.json'; // 바뀔 수 있는 데이터는 빼서 선언해준다
ajax.open('GET', News_url , false); //false : 동기적으로 처리하겠다는 뜻 
ajax.send();

// ajax.response //데이터를 가져온다
// ajax를통해 가져오면, 개발자 도구의 network - XHR 에서 확인할 수 있다. 

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');


for(let i = 0; i< 10; i++){
  const li = document.createElement('li');
  
  li.innerHTML = newsFeed[i].title;
  
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul)
