const fs = require('fs').promises;

fs.writeFile('./write.txt','글이 입력됩니당!')
.then(()=>{
    return fs.readFile('./write.txt')
})
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.error(err);
})
