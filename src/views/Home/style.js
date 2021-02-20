import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	flex-wrap: wrap;
	margin-bottom:70px
`;

export const FilterArea = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
	flex-wrap: wrap;

	button {
		background: none;
		border: none;
	}
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	a{
		text-decoration: none;
		color:#000
	}
	
`;

export const Title = styled.div`
	width: 100%;
	border-bottom: 1px solid #0b267d;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;

	h3 {
		color: #0b267d;
		position: relative;
		top: 27px;
		background: #fff;
		padding: 0 20px;
	}
`;
