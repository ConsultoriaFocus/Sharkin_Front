//classe para mostrar os usuarios que estao em plantao
//incompleto
import React from "react";
import { GiSharkJaws } from 'react-icons/gi';

import SharkinService from '../../services/sharkin';
import './Sharkins.css';
export default class Sharkins extends React.Component {

    state = {
        sharkin: [],
    }


    //run on load
    // recebe os dados de plantao do back
    componentDidMount() {
        const fetchData = async () => {

            const response = await SharkinService.listSharkin();
            this.setState({ sharkin: response.data })
            console.log("this.state.sharkin - ");

            console.log(" - this.state.sharkin");

        }

        fetchData().catch(console.error).then();
    };

    render() {
        return (
            <div className="teste">
                {

                    this.state.sharkin.slice(0).reverse().map((index) => {

                        return (
                            <flex className="card">
                                <GiSharkJaws scale={25}/>
                              
                                <div>
                                <div className="text"> {index.User_Id.name} </div>
                                <br/>
                                <div className="text">{new Date(index.HourSharkin).toLocaleDateString("pt-BR")} - {new Date(index.HourSharkin).toTimeString("pt-BR").split(' ')[0]} </div>
                                </div>
                            </flex>
                        );
                    })

                }
            </div>
        );
    }
}