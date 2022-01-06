// class Prefixer {
//     constructor(prefix) {
//         this.prefix = prefix;
//     }

//     add(arr) {
//         // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열 모든 요소에 prefix를 추가
//         // (1)
//         return arr.map(function (item) {
//             return this.prefix + item // (2)
//             // TypeError: Cannot read properties of undefined (reading 'prefix')
//         });
//     }
// }
// const prefixer = new Prefixer('-webkit-');
// console.log(prefixer.add(['transition', 'user-select']));


class ArrowPrefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const ARROWPREFIXER = new ArrowPrefixer('-webkit-');
console.log(ARROWPREFIXER.add(['transition', 'user-select']));
//[ '-webkit-transition', '-webkit-user-select' ]

