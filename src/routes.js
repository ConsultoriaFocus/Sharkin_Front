import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserActionsScreen from './screens/UserActionsScreen';
import PrivateRouter from './services/private_router';

const MyRoutes = () =>(
    <BrowserRouter>
    <Routes>
    <Route exact path = "/" element = {<Navigate to={{pathname: "/login"}}/>}/>
        <Route exact path = "/Register" element={<RegisterScreen/>}/>
        <Route exact path = "/Login" element={<LoginScreen/>}/>
        <Route exact path='/ChangePassword' element={<ChangePasswordScreen/>}/>
        <Route exact path='/UserActions' element={<PrivateRouter/>}>
      <Route exact path='/UserActions' element={<UserActionsScreen/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
)
export default MyRoutes;
