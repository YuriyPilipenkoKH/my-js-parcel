const promise = new Promise((resolve,reject) => {
    const canFulfill = Math.random() > 0.5

    setTimeout(() => {
        if(canFulfill) {
            resolve('great success')
        }
        // reject('epic fail') 

    }, 2000);
})

// promise.then(
//     result => {
//     // console.log(result);
// },
// error => {
//     // console.log(error);
// }
// )

// promise.then(onFulfilled,onRejected)

function onFulfilled(result) {
    console.log();
}

promise.then(result => {
    console.log(result);
    return 5
})
.then(x => { 
    // console.log(x);
})
//=========================================================

const makeOrder = dish => {
    const DELAY = 1000

    setTimeout(() => {
        
    }, DELAY);
}
//=========================================================

const p = new Promise((res,rej) => {
    res (10)
    
} ) .catch(e => console.log(e))

p.then(v => console.log(v))

