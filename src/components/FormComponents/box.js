
import styled from 'styled-components';
const Box=styled.div`
background-color: ${props=>props.color};
height: ${props=>props.height};
width:${props=>props.width};
border-radius:0.5rem;
`
export default Box;