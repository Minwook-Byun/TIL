const person = {
    name: 'Boram',
    address: 'Seoul',
};

for (const key in person) {
    console.log(key + '의 키는' + person[key]);
}

// name의 키는Boram
// address의 키는Seoul