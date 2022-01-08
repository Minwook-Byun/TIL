// 예제 27-110 응용
const 보람카페가격 = [2500, 3000, 4500, 5000];

const possibleCoffee = 보람카페가격.filter(item => item <= 3500);
console.log(possibleCoffee) //[ 2500, 3000 ]

// 예제 27-112 응용
console.log('민트초코파이'.includes('민트')) //오 이에 왜 되지? 
class 보람카페메뉴{
    constructor() {
        this.menu = [
            {id: 1, name: '민트초코쇼콜라라떼'},
            {id: 2, name: '민트초코바닐라라떼'},
            {id: 3, name: '민트초코아인슈페너'},
            {id: 4, name: '아인슈페너'},
            {id: 5, name: '바닐라라떼'},
        ];
    }

    // 요소추출 
    findByName(name){
        return this.menu.filter(item => item.name.includes(name))
        // 무지성코딩 멈춰! 프로퍼티 쓰는데 그냥 item만 쓰면 우째!!
    }

    removeByName(name){
        return this.menu.filter(item => !(item.name.includes(name)))
    }
}

const menupan = new 보람카페메뉴();

const 민초단 = menupan.findByName('민트');
console.log(민초단)
// [    { id: 1, name: '민트초코쇼콜라라떼' },    { id: 2, name: '민트초코바닐라라떼' },    { id: 3, name: '민트초코아인슈페너' }
//   ]
  
const 민초척사파 = menupan.removeByName('민트');
console.log(민초척사파)
//[ { id: 4, name: '아인슈페너' }, { id: 5, name: '바닐라라떼' } ]
