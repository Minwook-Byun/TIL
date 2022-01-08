// 예제 27-124
// const sum = [].reduce((acc, cur) => acc + cur);
//TypeError: Reduce of empty array with no initial value

// 예제 27-125
const sum = [].reduce((acc, cur) => acc + cur, 0);
console.log(sum); //0

// 예제 27-126
const product = [
    {id:1, price: 2500},
    {id:2, price: 3500},
    {id:3, price: 5500},
]

const priceSum = product.reduce((acc, cur) => acc+ cur.price, 0);
console.log(priceSum); //11500

