// console.log('timer');

const mydate = new Date(263970000000)
// console.log(mydate);

const date1 = new Date().getTime()
// console.log('date1:',date1);

setTimeout(() => {
    const date2 = new Date().getTime()

    // console.log('date1:',date1);
    // console.log('date2:',date2);
    // console.log(date2-date1);
}, 3000);

const now = Date.now()
// console.log('now' ,now);

//====================TIMER====================

const refs = {
    startBtn: document.querySelector('[data-action-start]'),
    stopBtn: document.querySelector('[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
}
console.log(refs.stopBtn);

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if(this.isActive) {
            return
        }

        startTime = Date.now()
        this.isActive = true

       this.intervalId = setInterval(() => {
            // console.log(startTime);
            // console.log('interval');

            const currenttime = Date.now()
            const deltaTime = currenttime - startTime
            const time = getTimeComponents(deltaTime)
            // console.log(currenttime - startTime);

            updateClockface(time)
          
            // console.log(`${hours}::${mins}::${secs}`); 

            // console.log(`${pad(new Date(deltaTime).getHours())}:${pad(new Date(deltaTime).getMinutes())}:${pad(new Date(deltaTime).getSeconds())}`); 
         
        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId)
        this.isActive = false
}
}
// timer.start()

refs.startBtn.addEventListener('click', () => {
    timer.start()
})

refs.stopBtn.addEventListener('click', () => {
    timer.stop()
})

function updateClockface({hours,mins,secs}) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`
}

function pad(value) {
    return String(value).padStart(2, '0') 
}

function getTimeComponents (time) {
    const hours = pad( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 *  60)))
    const mins = pad(Math.floor((time % (1000 * 60 * 60 )) / (1000 * 60)))
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000 ))

    return { hours, mins, secs };
}
//   console.log(getTimeComponents()); 