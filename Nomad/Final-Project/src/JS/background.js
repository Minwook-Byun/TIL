const images = ["1.jpg", "2.jpg", "3.jpg"];


const bgImage = document.createElement("img");
const chosenImage = images[Math.floor(Math.random() * images.length)]; 
bgImage.style.position = `absolute`;
    bgImage.style.left = `0`;
    bgImage.style.top = `0`;
    bgImage.style.zIndex = `-9999`
    bgImage.src = `img/${chosenImage}`;
    document.body.appendChild(bgImage)




