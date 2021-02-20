import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center; 
	
`;

export const Form = styled.div`
	width: 50%;
    margin: 20px;
	margin-bottom:70px;
	 
`;

export const TypeIcons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap; 
	

	.inactive {
		opacity: 0.5;
	}

	button {
		background: none;
		border: none;
	}

	img {
		width: 50px;
		height: 50px;
		margin: 5px;
		margin-bottom: 0px;
		cursor: pointer;

		&:hover {
			opacity: 0.5;
		}
	}
`;

export const Input = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	margin-bottom: 0px;

	span {
		color: #707070;
		margin: 5px 0px;
		font-weight: bold;
	}

	input {
		font-size: 14px;
        opacity:0.7;
		padding: 5px;
		border: none;
		border-bottom: 1px solid #ef700e;
	}
	img {
		width: 20px;
		height: 20px;
		position: relative;
		left: 95%;
		bottom: 25px;
	}
`;

export const Textarea = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 20px 0px;
	margin-bottom: 5px;

	span {
		color: #707070;
		margin-bottom: 5px;
		font-weight: bold;
	}

	textarea {
		font-size: 14px;
        opacity:0.7;
		border: 1px solid #ef700e;
		margin: 5px 0px;
	}
`;

export const Options = styled.div`
	width: 100%;
	display: flex;
	justify-content:space-between; 
   
    div{
        display: flex;
        align-items: center;
        font-weight: bold;
        color:#ef700e;
        
        span{
            margin-left:5px;
        }
        
    }
    
    button {
		font-weight: bold;
		border: none;
		background: none;
        color: #0b267d;
        cursor: pointer;
        font-size: 14px;
        

        &:hover {
            opacity: 0.7;
        }
	}
`;

export const Save = styled.div`
    width: 100%;
    display: flex;
    margin:30px 0px;

    button{
        width:100%;
        background: #ef700e;
        border:none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        border-radius: 30px;
        padding:15px;
        
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
`;
