//grid para mostrar os sharkins
import "./GridPlantao.css"
import React from "react";

export default class GridPlantao extends React.Component {

    render() {
        return (
                
            <div className="grid-container">
                {this.props.children}
            </div>
            
        );
    }
}
