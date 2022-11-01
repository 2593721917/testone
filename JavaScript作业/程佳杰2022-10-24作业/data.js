function fn(){
    var { name, number ,major,grade}= require('./user_info');
    console.log('我叫'+name,'来自'+major+'专业'+grade,'学号是'+number);
}
fn();
