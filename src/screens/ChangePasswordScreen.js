import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Styled from 'styled-components';
import Bodygradient from '../components/FormComponents/Bodygradient.js';
import Box from '../components/FormComponents/box.js';
import Button_submit from '../components/FormComponents/Button_submit';
import FormInput from '../components/FormComponents/FormInput.js';
import Formlabel from '../components/FormComponents/Formlabel.js';
import Formspan from '../components/FormComponents/Formspan';
import H1_form from '../components/FormComponents/H1form.js';
import Paragraphform from '../components/FormComponents/Paragraphform';
import UserService from '../services/users.js';

const Box1=Styled(Box)`
margin-top:10rem;
margin-left:47rem;
margin-right:2rem;
border-width: 5px;
border-color: #D3D3D3;`;
function ChangePasswordScreen() {
  const [matricula, setmatricula] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [newpassword2, setNewPassword2] = useState("");
  const [redirectToLogin, setredirectToLogin] = useState(false);
  const [error, setError] = useState(false);
  function Handleparagraph(){
    setredirectToLogin(true);
  }
  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try{
      await UserService.changePassword({newpassword: newpassword, matricula:matricula, newpassword2 });
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
<Box1 height='43rem' width='25rem' color='#000'>
    <form onSubmit={HandleSubmit}>
      <H1_form>Alterar Senha</H1_form>
  <Formlabel>
    <br></br>       <FormInput placeholder="Matrícula" type="text" value={matricula} onChange={e=>setmatricula(e.target.value)}/>
  </Formlabel>
  <br></br><br></br>
  <Formlabel>
    <br></br>       <FormInput placeholder="Senha" type="password" name="senha" value={newpassword} onChange={e=>setNewPassword(e.target.value)}/>
  </Formlabel>
    <br></br><br></br>
  <Formlabel>
    <br></br>       <FormInput placeholder="Confirmar Senha" type="password" name="senha" value={newpassword2} onChange={e=>setNewPassword2(e.target.value)}/>
  </Formlabel>
  <Button_submit type="submit" value="Alterar Senha" >Alterar Senha</Button_submit>
  <br></br> <br></br>
  {error && <Formspan>    Matrícula Inválida    </Formspan>}
</form>
<br></br>
<Paragraphform onClick={Handleparagraph}> Login </Paragraphform>
  </Box1>
  </Bodygradient>
)
}

export default ChangePasswordScreen;