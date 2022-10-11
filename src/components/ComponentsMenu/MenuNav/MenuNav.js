import "./MenuNav.css";
import React from "react";
import { MdMenu } from 'react-icons/md';

export default class MenuNav extends React.Component {

    state = {
        size: 0,
    };

    openNav = () => {
        this.setState({ size: (this.state.size === 500) ? 0 : 500 })
    }
    render() {
        return (
            <div>
                <button className="btn_menu" onClick={this.openNav}> 
                 <MdMenu scale={100}/>
                </button>
                <div className="sidenav" style={{ width: this.state.size }}>
                    <button className="btn_menu" onClick={this.openNav}> 
                        <MdMenu scale={100}/>
                    </button>

                    {this.props.children}
                </div>
            </div>
        );
    }
}
