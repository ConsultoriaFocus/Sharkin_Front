import "./Box.css";
import React from "react";
import audio from "../../assets/alarm_sound/coffee_notification.mp4"

export default class Box_Alert extends React.Component {


    hour =(new Date()).getHours();
    min = (new Date()).getMinutes();
    state = {
        // true se o horario e entre 18:30 - 19:30 
        visible: ( 1110<(this.min+60*this.hour)&&(this.min+60*this.hour)< 1170 ),
    }
    componentDidMount() {

        let som = new Audio(audio)

        setInterval(() => {
            
            let min = (new Date()).getMinutes();
            let hour = (new Date()).getHours();
            if (min === 30 && hour ===18) {
                som.play();
                this.setState({ visible: true });
            }
            else if(min === 30 && hour ===19){
                this.setState({ visible: false });
            }

        }, 45 * 1000)
        
    };

    render() {
        return (
            <div className="Box" style={{display: (this.state.visible)?'block':'none'}}>
                Terminando horário comercial, desligar cafeteira e arrumar a sala, Sharks! 
            </div>
        );
    }
}