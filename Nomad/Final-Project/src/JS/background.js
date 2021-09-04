const images = ["0.jpg", "1.jpg", "3.jpg", "4.jpg"];


const bgImage = document.createElement("img");
const chosenImage = images[Math.floor(Math.random() * images.length)]; 
bgImage.style.position = `absolute`;
    bgImage.style.left = `0`;
    bgImage.style.top = `0`;
    bgImage.style.zIndex = `-1`
    bgImage.src = `img/${chosenImage}`;
    document.body.appendChild(bgImage)




