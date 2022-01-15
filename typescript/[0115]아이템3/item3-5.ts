function asNumber(val:number | string) : number {
    return val as number; 
}

// 해결
function asNum(val:number | string) : number {
    return typeof(val) === 'string' ? Number(val): val;
}
