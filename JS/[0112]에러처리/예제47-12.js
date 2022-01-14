const foo = () => {
    throw new Error('🙋 foo에서 날아온 에러 🙋') // (4)
};

const test = () => {
    foo(); //(3)
}

const test2 = () => {
    test(); //(2)
}

try {
    test2(); //(1)
} catch (e) {
    console.error(e);
}
