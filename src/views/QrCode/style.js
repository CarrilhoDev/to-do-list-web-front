import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	flex-wrap: wrap;
	margin-bottom: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Content = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		color: #ef700e;
	}
	p {
		color: #0b267d;
        font-weight: bold;
	}
`;

export const QrCodeArea = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const ValidateCode = styled.div`
	display: flex;
    flex-direction: column;
    margin:10px;

    span{
        text-transform: uppercase;
        font-weight:bold;
        margin:10px;

    }
   
    span{
        font-weight: bold;
        color:#0b267d;
    }

    input{
        font-size:18px;
        padding: 10px;
        text-align: center;
        border-radius: 15px;
        border-color:#0b267d;
    }

    button{
        font-weight: bold;
        background:#ef700e;
        color:#fff;
        font-size:18px;
        padding: 20px 0px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin:20px 0px;

        &:hover{
            background:#0b267d;
        }
    }
`;
