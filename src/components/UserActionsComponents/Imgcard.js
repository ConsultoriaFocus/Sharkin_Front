import styled from 'styled-components';
const Imgcard= styled.div`
background-color:#FFF;
border-radius: 5px 5px 0 0;
height:8rem;
background-size:cover; 
background-position: top center; 
background-repeat:no-repeat; 
background-image:url('${props=>props.src}');
width:12.5rem;`;
export default Imgcard;
