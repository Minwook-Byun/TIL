const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
const clickButton = document.querySelector("button"); //get button 

function changeBackground() {
    const randomColorsInt1 = (Math.floor(Math.random() * colors.length)); //refactoring 
    const randomColorsInt2 = (Math.floor(Math.random() * colors.length));
    
    //assign Int
    const startColor = colors[randomColorsInt1]; //gradient start color
    const endColor = colors[randomColorsInt2]; // gradient end color
    
    //set gradient
    const gradientColors = (`linear-gradient(to right, ${startColor}, ${endColor})`)
    document.body.style.background = gradientColors //` `과 style 선언하는 것에 대한 이해자체가 되고 복붙을 해야지!!!!

}

changeBackground()
clickButton.addEventListener("click", changeBackground);