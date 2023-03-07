const timerId = setInterval(() =>  {
    // console.log('Tick');
},2000);

setTimeout(() => {
    clearInterval(timerId) 
},5000)

const date = new Date()
// console.log(date);
//-------------------------
// console.log('a');
// setTimeout(() => console.log('b'),0)
// console.log('c');

//-------------------------
for (let i = 3; i>0; i--) {
    const element = i*1000;
    setTimeout(() => console.log('i:'+i),element)
    
}
//-------------------------
const now = Date.now()
// console.log(now);
//-------------------------
setTimeout(() => console.log('a'),2000)
console.log('b');
setTimeout(() => 1500)
console.log('d');
//-------------------------
const date2 = new Date('2030-08-23') 
console.log(date2.getMonth());
//-------------------------


//-------------------------
//-------------------------
//-------------------------
//-------------------------
//-------------------------




 