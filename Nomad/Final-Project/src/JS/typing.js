const quotes=[
    "그곳에 매번 남겨진 사람들이 생겨난다면... \n 우리는 점점 더 우주에 존재하는 \n 외로움의 총합을 늘려갈 뿐인 게 아닌가...",
    "우리는 그곳에서 괴로울 거야... \n 하지만 그보다 많이 행복할 거야...",
    "나는 내가 가야 할 곳을...\n 정확히 알고 있어..."
]



const content = quotes[Math.floor(Math.random() * quotes.length)]
const text = document.querySelector(".typing-txt");
let typingInt = 0;

function typing(){
    if (typingInt < content.length){
        let txt = content.charAt(typingInt);
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        typingInt++;
    }
}

setInterval(typing,150);