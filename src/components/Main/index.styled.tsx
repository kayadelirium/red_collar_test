import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const MainStyled = styled.div`
    background: linear-gradient(-45deg, #23a6d5, #23d5ab, #b98b0c, #ee7752, #e73c7e);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 10s ease infinite;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
