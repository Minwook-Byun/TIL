type cat = {
    name: string,
    purrs: boolean
}
type dog = {
    name: string,
    barks: boolean,
    wags: boolean
}
type CatOrDog = cat | dog
type CatAndDog = cat & dog

//Cat 
let 만능반려동물: CatOrDog = {
    name: '바보냥',
    purrs: true
}

//dog 
만능반려동물 = {
    name: '바보개',
    barks: true,
    wags: true,
}

// 둘다 
만능반려동물 = {
    name: '만능견묘',
    barks : true,
    purrs : true,
    wags : true,
}


let 만능반려동물b : CatAndDog ={
    name : '도미노',
    purrs : true,
    barks : true,
    wags : true,
}

function trueOrNull(isTrue: boolean) { 
    if(isTrue){
        return 'true'
    }
    return null 
}

type Returns = string | null 

// function(a:string, b:number) {
//     return a || b
// }

