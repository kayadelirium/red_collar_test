import styled from "styled-components";
import { IStyledProps } from "./types";

export const AddresseesStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    max-width: 350px;
    width: 90%;
    padding: 5px 5px 5px 10px;
    box-sizing: border-box;
    transition: 0.3s;
    background-color: ${(props: IStyledProps) => (props.error ? "rgba(156, 31, 31, 0.6)" : "rgba(0, 0, 0, 0.2)")};
`;

export const AddresseesLabelStyled = styled.div`
    color: rgba(255, 255, 255, 0.5);
    vertical-align: center;
    line-height: 34px;
`;

export const AddresseeContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    overflow-x: scroll;
    padding-top: 4px;
    padding-bottom: 2px;
    ::-webkit-scrollbar {
        height: 2px;
        padding: 2px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;
