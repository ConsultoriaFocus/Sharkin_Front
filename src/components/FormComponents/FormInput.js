import styled from 'styled-components';
const FormInput=styled.input`
    border-color: #1D1D1B;
    font-family:clear-sans, helvetica, sans-serif;
    color:white;
    font-weight: bold;
    border-radius: thin;
    margin-bottom:1rem;
    margin-left:2rem;
    background-color:#263642;
    height: 2.4rem;
    width:20rem;
    border-width: 3px;
    border-radius: 0.3rem;
    ::-webkit-input-placeholder  { color:white; }
input:-moz-placeholder { color:white; }
textarea:-moz-placeholder { color:white; }
`
export default FormInput;