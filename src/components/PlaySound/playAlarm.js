import audio from "../../assets/alarm_sound/alarm.mp4"


function play_sound() {
    let som = new Audio(audio)

    setInterval(() => {
        let min = (new Date()).getMinutes()
        console.log(min)
        if (min === 0) {
            som.play()
        }

    }, 45 * 1000)
} export default play_sound