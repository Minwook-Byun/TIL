// //예제 27-100
// class Numbers {
//     numArray = [];;

//     multiply(arr) {
//         arr.forEach(function(item){
//             // TypeError: Cannot read properties of undefined (reading 'numArray')
//             console.log(this)//undefined
//             this.numArray.push(item*item);
//         });
//     }
// }

// const numbers = new Numbers();
// numbers.multiply([1,2,3])

class thisNumber {
    thisNumArr = [];

    thisMulti(arr) {
        arr.forEach(function (item) {
            this.thisNumArr.push(item * item);
        }, this) //forEach 메서드 콜백 함수 내부에서 this로 사용할 객체 전달 
    }
}

const thisNum = new thisNumber();
thisNum.thisMulti([1, 2, 3]);
console.log(thisNum.thisNumArr); //[ 1, 4, 9 ]

// 예제27-102
class ArrowNum {
    numArr = [];

    multiple(arr) {
        arr.forEach((item) => {
            this.numArr.push(item*item); //this 안쳐도 this가 붙여지네 ㅎㅎ 
        })
    }
}

const arrowNum = new ArrowNum();
arrowNum.multiple([1,3,5]);
console.log(arrowNum.numArr); //[ 1, 9, 25 ]

