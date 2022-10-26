//elementos da grid para mostrar os sharkins
import "./GridPlantao.css"
import React from "react";

export default class GridElement extends React.Component {

    render() {
        return (
                
            <div className="grid-element">
                {this.props.children}
            </div>
            
        );
    }
}
