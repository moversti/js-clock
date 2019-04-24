function rotSec(sec){
    let d=new Date()
    let deg=360*(d.getSeconds()/60)+(d.getMilliseconds()/1000)*6
    let asdf='rotate('+deg+'deg)'
    sec.style.transform="translateX(50vw) translateY(20vmin)"+asdf
}

function rotMin(min){
    let d=new Date()
    let deg=360*(d.getMinutes()/60)+6*(d.getSeconds()/60)
    let asdf='rotate('+deg+'deg)'
    min.style.transform="translateX(50vw) translateY(20vmin)"+asdf
}

function rotHour(hour){
    let d=new Date()
    let deg=360*(d.getHours()/12)+6*(d.getMinutes()/60)
    let asdf='rotate('+deg+'deg)'
    hour.style.transform="translateX(50vw) translateY(30vmin)"+asdf
}

window.addEventListener('load', ()=>{
    let sec = document.getElementsByClassName('sec')[0]
    setInterval(rotSec, 100, sec);
    let min = document.getElementsByClassName('min')[0]
    setInterval(rotMin, 1000, min);
    let hour = document.getElementsByClassName('hour')[0]
    setInterval(rotHour, 60000, hour);
    rotSec(sec)
    rotMin(min)
    rotHour(hour)
})