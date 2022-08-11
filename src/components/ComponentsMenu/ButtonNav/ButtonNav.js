import "./ButtonNav.css";
import React from "react";

export default class ButtonNav extends React.Component {

    render() {
        return (
            <div>
                <button className="ButtonNav" onClick={this.props.onClick}> {this.props.children} </button>
            </div>
        );
    }
}
