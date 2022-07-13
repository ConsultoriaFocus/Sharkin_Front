import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import UserActionsScreen from './screens/UserActionsScreen';
import PrivateRouter from './services/private_router'

const MyRoutes = () =>(
    <BrowserRouter>
    <Routes>
    <Route exact path = "/" element = {<Navigate to={{pathname: "/login"}}/>}/>
        <Route exact path = "/Register" element={<RegisterScreen/>}/>
        <Route exact path = "/Login" element={<LoginScreen/>}/>
        <Route exact path='/UserActions' element={<PrivateRouter/>}>
      <Route exact path='/UserActions' element={<UserActionsScreen/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
)
export default MyRoutes;
