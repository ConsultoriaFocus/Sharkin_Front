import focus from '../assets/images/focus.png';
import React from 'react';
import { useState} from 'react';
import Styled from 'styled-components';
import {Navigate} from 'react-router-dom';
import UserService from '../services/users.js';
import { Box, H1_form, Formlabel, FormInput, Button_submit, Bodygradient, Formspan, Imgfocus, Paragraphform ,H1Welcome} from '../components/FormComponents';
import Sharkins from '../components/Sharkins/Sharkins';

const Box1=Styled(Box)`
margin-top:12rem;
margin-left:85rem;
margin-right:2rem;
border-width: 5px;
border-color: #D3D3D3;`;
function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToUserActions, setredirectToUserActions] = useState(false);
  const [redirectToRegister, setredirectToRegister] = useState(false);
  const [error, setError] = useState(false);
  function Handleparagraph(){
    setredirectToRegister(true);
  }
  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try{
      const user = await UserService.login({email:email, password: password});
      setredirectToUserActions(true);
    }
    catch(error){
      setError(true);
    }
      
  }
  if(redirectToUserActions){
    return(<Navigate to={{pathname: "/UserActions"}}/>)
  }
  if(redirectToRegister){
    return(<Navigate to={{pathname: "/Register"}}/>)
  }
  return(
    <Bodygradient>
      <H1Welcome >
      <Imgfocus src={focus}/>
        <p>Seja Bem-Vindo</p>
        <p>SHARK!</p>
        <Sharkins></Sharkins>
      </H1Welcome>

<Box1 height='33rem' width='25rem' color='#394f5d'>
    <form onSubmit={HandleSubmit}>
      <H1_form>Login</H1_form>
  <br></br>
  <Formlabel>
    <br></br>       <FormInput type="text" name="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
  </Formlabel>
  <br></br>
  <Formlabel>
 <br></br>       <FormInput type="password" name="senha" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)}/>
  </Formlabel>
  <Button_submit type="submit" value="Login" >Login</Button_submit>
  <br></br> <br></br>
  {error && <Formspan>    *Email ou senha inválidos    </Formspan>}
</form>

<br></br>
<Paragraphform onClick={Handleparagraph}> Cadastrar </Paragraphform>
  </Box1>
  </Bodygradient>
)
}

export default RegisterScreen;