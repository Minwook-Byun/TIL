function asNumber(val) {
    return val;
}
function asNum(val) {
    return typeof (val) === 'string' ? Number(val) : val;
}
