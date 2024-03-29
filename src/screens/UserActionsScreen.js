import React, { Fragment, useState, useEffect } from 'react';
import Bodygradient from '../components/FormComponents/Bodygradient';
import {
    H1High,
    Card,
    Imgcard,
    Container,
    GridPlantao,
    Footer,
    Header,
    ButtonShark
} from '../components/UserActionsComponents/';
import SharkinService from '../services/sharkin';
import UsersService from '../services/users';
import { Navigate } from 'react-router-dom';
import { MenuNav, ButtonNav } from '../components/ComponentsMenu';
import DownloadCsv from "../components/DownloadCsv/DownloadCsv.js";
import moment from 'moment';
import requirees from "../components/UserActionsComponents/Requires.js";
function UserActionsScreen() {
    const [sharkin, Setsharkin] = useState([]);
    const [logout, Setlogout] = useState(false);
    function HandleLogout() {
        UsersService.logout();
        Setlogout(true);
    }
    function Handleclick() {
        var plantao = localStorage.getItem('Emplantao');
        if (plantao === 'false') {
            SharkinService.sharkin();
            localStorage.setItem('Emplantao', true);
        } else {
            SharkinService.sharkout();
            localStorage.setItem('Emplantao', false);
        }
        window.location.reload();
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await SharkinService.index();
            Setsharkin(response.data);
        }

        fetchData().catch(console.error).then();
    }, [])
    var messagebutton;
    var l = localStorage.getItem('Emplantao');
    if (l === 'false') {
        messagebutton = "Sharkin";
    } else {
        messagebutton = "Sharkout";
    }
    if (logout === true) {
        return (<Navigate to={{ pathname: "/Login" }} />)
    }
    return (
        <Fragment>
            <Bodygradient>
                
                <Header>
                    <H1High style={{ color: "#e64c94" }}>Sharkins da Semana</H1High>
                </Header>
                <MenuNav>
                    <ButtonNav><DownloadCsv file={sharkin}></DownloadCsv></ButtonNav>
                    <ButtonNav onClick={HandleLogout}>logout</ButtonNav>
                </MenuNav>


                <GridPlantao >
                    {
                        sharkin.slice(0).reverse().map((index) => {
                            const Avatar = requirees(index.User_Id.matricula);
                            return (
                                <Card>
                                    <Imgcard src={Avatar} />
                                    <Container>
                                        <h4><b>{index.User_Id.name}</b></h4>
                                        <p><b>Sharkin:  </b>{moment(index.HourSharkin).format('DD/MM/YYYY')}  {moment(index.HourSharkin).format('HH:mm:ss')}</p>
                                        <p><b>Sharkout:  </b>{moment(index.HourSharkout).format('DD/MM/YYYY')}  {moment(index.HourSharkout).format('HH:mm:ss')}</p>
                                    </Container>
                                </Card>
                            )
                        })
                    }


                </GridPlantao>


                <Footer>
                    <ButtonShark onClick={Handleclick}>{messagebutton}</ButtonShark>
                </Footer>
            </Bodygradient>
        </Fragment>
    );

}
export default UserActionsScreen;