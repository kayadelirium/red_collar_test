import styled from "styled-components";

export const ButtonStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 13px;
    width: fit-content;
    font-family: monospace;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    :hover {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    }
    cursor: pointer;
`;

export const TextButtonStyled = styled.div`
    margin: 5px 10px;
`;

export const ImageButtonStyled = styled.img`
    width: 15px;
    height: 15px;
`;

export const FormControlStyled = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`;
