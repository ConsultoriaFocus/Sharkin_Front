import Box from '../components/FormComponents/box.js';
import H1_form from '../components/FormComponents/H1form.js';
import Formlabel from '../components/FormComponents/Formlabel.js';
import FormInput from '../components/FormComponents/FormInput.js';
import Button_submit from '../components/FormComponents/Button_submit';
import Bodygradient from '../components/FormComponents/Bodygradient.js';
import Formspan from '../components/FormComponents/Formspan';
import focus from '../assets/images/focus.png';
import Imgfocus from '../components/FormComponents/Imgfocus';
import Paragraphform from '../components/FormComponents/Paragraphform';
import React from 'react';
import { useState } from 'react';
import Styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import UserService from '../services/users.js';
import H1Welcome from '../components/FormComponents/H1Welcome';
import Sharkins from '../components/Sharkins/Sharkins'
const Box1 = Styled(Box)`
margin-top:12rem;
margin-left:85rem;
margin-right:2rem;
border: solid 5px #e64c94;
`;
function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToUserActions, setredirectToUserActions] = useState(false);
  const [redirectToRegister, setredirectToRegister] = useState(false);
  const [error, setError] = useState(false);
  function Handleparagraph() {
    setredirectToRegister(true);
  }
  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UserService.login({ email: email, password: password });
      setredirectToUserActions(true);
    }
    catch (error) {
      setError(true);
    }



  }
  if (redirectToUserActions) {
    return (<Navigate to={{ pathname: "/UserActions" }} />)
  }
  if (redirectToRegister) {
    return (<Navigate to={{ pathname: "/Register" }} />)
  }
  return (
    <Bodygradient>
      <H1Welcome>
        <Imgfocus src={focus} />
        <p>Seja Bem-Vindo</p>
        <p style={{color: "#e64c94"}}>SHARK!</p>

        <Sharkins></Sharkins>
      </H1Welcome>

      <Box1 height='35rem' width='25rem' color='#000'>
        <form onSubmit={HandleSubmit}>
          <H1_form>Login</H1_form>
          <br></br>
          <Formlabel>
            <br></br>       <FormInput type="text" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </Formlabel>
          <br></br>
          <Formlabel>
            <br></br>       <FormInput type="password" name="senha" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
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