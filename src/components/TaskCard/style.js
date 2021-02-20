import styled from "styled-components";

export const Container = styled.div`
	width: 260px;
	height: 160px;
	box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
	border-radius: 10px;
	
	display: flex;
	align-items: center;
	justify-content:center;
	flex-direction: column;
	flex-wrap: wrap;
	
	margin: 0px 15px 70px 15px;
	cursor: pointer;
	transition: all 0.5s ease;
	opacity: ${props => props.done ? 0.5 : 1};

	&:hover {
		
		background: #0B267D;
		
		h3{
			color: #fff;
		}
		span{
			color:#EFEFEF;
		}
	
		
	}
`;

export const TopCard = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top:10px;
	
	
	img{
		width:60px;
		height:60px;
		padding-top: 10px;
	}
`;
export const BottomCard = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;

	strong {
		color: #ef700e;
		font-weight: bold;
	}
	span {
		color: #707070;
		font-weight: bold;
	}
	
`;
