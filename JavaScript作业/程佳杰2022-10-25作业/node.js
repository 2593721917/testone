const fs = require('fs');

fs.writeFile('d:/Node.js/1.txt','同一个世界，同一个梦响',function(err){

    if(err){
        return console.log('文件写入失败'+err.message);
    }

    console.log('文件写入成功');

})