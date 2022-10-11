// botao padrao
import "./ButtonShark.css"
import React from "react";

export default class ButtonShark extends React.Component {



    render() {
        return (
                
            <button onClick={this.props.onClick} className="ButtonShark">
                {this.props.children}
            </button>
            
        );
    }
}
