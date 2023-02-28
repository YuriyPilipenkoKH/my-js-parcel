
const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]')
};

refs.start.addEventListener('click', () => {
    // setBodyColor(getRandomHexColor())
    bodyColorSetter.start()
})

refs.stop.addEventListener('click', () => {
    bodyColorSetter.stop()
})

const bodyColorSetter = {
    intervalId: null,
    inProcess: false,

    start() {
        if(this.inProcess) {
            return
        }
        this.inProcess = true
        refs.start.setAttribute("disabled", "")

        this.intervalId = setInterval(() => {
        setBodyColor(getRandomHexColor())

        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId)
        this.inProcess = false
        refs.start.removeAttribute("disabled", "")
},

}

function setBodyColor(color) {
    document.body.style.backgroundColor = color;
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
