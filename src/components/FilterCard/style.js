import styled from "styled-components";

export const Container = styled.div`
	width: 250px;
	height: 50px;
	background: ${props => props.activated ?'#ef700e' : '#0b267d'};
    border-radius: 5px;
	display: flex; 
    flex-direction: column;
    justify-content:space-between;
    padding:10px;
    cursor: pointer;
    flex-wrap: wrap;
    
    img{
        width:15px;
        height:15px;
    }
   
    span{
        color: #fff;
        align-self:end;
        font-size:14px;
    }
    &:hover{
        background: #ef700e;
    }
    
`;
