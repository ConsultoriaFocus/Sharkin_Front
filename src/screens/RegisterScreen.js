import Box from '../components/FormComponents/box.js';
import H1_form from '../components/FormComponents/H1form.js';
import Formlabel from '../components/FormComponents/Formlabel.js';
import FormInput from '../components/FormComponents/FormInput.js';
import Button_submit from '../components/FormComponents/Button_submit';
import Bodygradient from '../components/FormComponents/Bodygradient.js';
import Formspan from '../components/FormComponents/Formspan';
import Imgfocus from '../components/FormComponents/Imgfocus';
import Paragraphform from '../components/FormComponents/Paragraphform';
import React from 'react';
import { useState} from 'react';
import Styled from 'styled-components';
import {Navigate} from 'react-router-dom';
import UserService from '../services/users.js';

const Box1=Styled(Box)`
margin-top:10rem;
margin-left:47rem;
margin-right:2rem;
border-width: 5px;
border-color: #D3D3D3;`;
function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matricula, setmatricula] = useState("");
  const [redirectToLogin, setredirectToLogin] = useState(false);
  const [error, setError] = useState(false);
  function Handleparagraph(){
    setredirectToLogin(true);
  }
  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try{
      const user = await UserService.register({name: name, email:email, password: password, matricula:matricula, EmPlantao:false, });
      setredirectToLogin(true);
    }
    catch(error){
      setError(true);
    }
      
  }
  if(redirectToLogin){
    return(<Navigate to={{pathname: "/login"}}/>)
  }
  return(
    <Bodygradient>
<Box1 height='43rem' width='25rem' color='#394f5d'>
    <form onSubmit={HandleSubmit}>
      <H1_form>Cadastrar</H1_form>
  <Formlabel>
    <br></br>      <FormInput placeholder="Nome Completo" type="text" name="name" value={name} onChange={e=>setName(e.target.value)} />
  </Formlabel>
  <br></br><br></br>
  <Formlabel>
    <br></br>       <FormInput placeholder="Email" type="text" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
  </Formlabel>
  <br></br><br></br>
  <Formlabel>
    <br></br>       <FormInput placeholder="Matrícula" type="text" value={matricula} onChange={e=>setmatricula(e.target.value)}/>
  </Formlabel>
  <br></br><br></br>
  <Formlabel>
    <br></br>       <FormInput placeholder="Senha" type="password" name="senha" value={password} onChange={e=>setPassword(e.target.value)}/>
  </Formlabel>
  <Button_submit type="submit" value="Registrar" >Registrar</Button_submit>
  <br></br> <br></br>
  {error && <Formspan>    *Email ou senha inválidos    </Formspan>}
</form>
<br></br>
<Paragraphform onClick={Handleparagraph}> Login </Paragraphform>
  </Box1>
  </Bodygradient>
)
}

export default RegisterScreen;