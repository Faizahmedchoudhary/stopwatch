console.log("stop watch");

let [millisecond, second, minutes, hours] = [0, 0, 0, 0];
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')
let time = document.querySelector(".display-time");
let int = null 

start.addEventListener("click", () => {
    console.log("start")
    int = setInterval(displayTime, 10)
})

stop.addEventListener("click", () => {
    console.log("stop")
    clearInterval(int)
});

reset.addEventListener("click", () => {
    console.log("reset");
    [second, minutes, hours] = [ 0, 0, 0];
    time.innerText = `00 : 00 : 00 `
})

const displayTime = () => {
    millisecond += 10;
    console.log("millisecond", millisecond)

    if (millisecond == 100) {
        second++
        millisecond = 0
        console.log(second)
    }

    if (second == 60) {
        minutes++
        second = 0
    }

    if (minutes == 60) {
        minutes = 0
        hours++
    }

    let newsecond = second < 10 ? '0' + second : second
    let newminutes = minutes < 10 ? '0' + minutes : minutes
    let newhours = hours < 10 ? '0' + hours : hours

    time.innerText = `${newhours} : ${newminutes} : ${newsecond} `
}

// displayTime()


