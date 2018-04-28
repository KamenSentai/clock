// Variables
const clock         = document.querySelector('.clock')
const needleHours   = clock.querySelector('.needle.hours')
const needleMinutes = clock.querySelector('.needle.minutes')
const needleSeconds = clock.querySelector('.needle.seconds')

// Tick function definition
const tick = () =>
{
    // Variables
    const date = new Date()

    const hours = date.getHours()
    const hoursAngle = hours / 12 * 360

    const minutes = date.getMinutes()
    const minutesAngle = hours * 360 + minutes / 60 * 360

    const seconds = date.getSeconds()
    const secondsAngle = hours * 360 + minutes * 360 + seconds / 60 * 360

    // Styles
    needleHours.style.transform   = `rotate(${hoursAngle + (minutesAngle % 360) / 12}deg)`
    needleMinutes.style.transform = `rotate(${minutesAngle}deg)`
    needleSeconds.style.transform = `rotate(${secondsAngle}deg)`
    
    needleHours.style.boxShadow   = `${2.5 * Math.sin(((hoursAngle + 45) % 360) * 2 * Math.PI / 360)}px ${2.5 * Math.cos(((hoursAngle + 45) % 360) * 2 * Math.PI / 360)}px 2.5px rgba(0, 0, 0, 0.75)`
    needleMinutes.style.boxShadow = `${2.5 * Math.sin(((minutesAngle + 45) % 360) * 2 * Math.PI / 360)}px ${2.5 * Math.cos(((minutesAngle + 45) % 360) * 2 * Math.PI / 360)}px 2.5px rgba(0, 0, 0, 0.75)`
    needleSeconds.style.boxShadow = `${2.5 * Math.sin(((secondsAngle + 45) % 360) * 2 * Math.PI / 360)}px ${2.5 * Math.cos(((secondsAngle + 45) % 360) * 2 * Math.PI / 360)}px 2.5px rgba(0, 0, 0, 0.75)`
}

// Tick function applied
tick()
window.setInterval(tick, 1000)