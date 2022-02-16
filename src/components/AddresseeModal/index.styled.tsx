import styled, { keyframes } from "styled-components";

const blur = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const AddresseeModalStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border-radius: 5px;
    z-index: 3;

    :before {
        z-index: 2;
        content: "";
        border-radius: 5px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        animation: ${blur} 0.2s linear;
        border-left: 1px solid rgba(255, 255, 255, 0.2);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
`;

export const AddresseeModalFormStyled = styled.div`
    z-index: 4;
    display: flex;
    position: relative;
    flex-direction: column;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    min-width: 200px;
`;

export const AddresseeModalFormHeaderStyled = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const AddresseeModalFormFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const AddresseeModalFormFormHeaderStyled = styled.div`
    text-align: center;
    font-size: 26px;
`;
