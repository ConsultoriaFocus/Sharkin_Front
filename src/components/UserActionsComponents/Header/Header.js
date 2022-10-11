// header da pagina
import "./Header.css"
import React from "react";

export default class Header extends React.Component {

    render() {
        return ( 
            
            <div>  
                <div className="space"></div>
                <div className="header">
                    {this.props.children}
                </div>
            </div> 
            
        );
    }
}