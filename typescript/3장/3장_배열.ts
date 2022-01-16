let myArr = ['red'];
myArr.push('blue');
// f.push(true);

let myArry_2 = [1, 'a']
myArry_2.map(_=>{
    if (typeof _ === 'number'){
        return _ *3
    }
    return _.toUpperCase()
})

function buildArray() {
    let a = [] // any[]
    a.push(1)  // number[]
    a.push('x') // (string | number) []
    return a 
}


