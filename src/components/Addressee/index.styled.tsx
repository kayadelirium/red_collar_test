import styled from "styled-components";

export const AddresseeStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const AddresseeNameStyled = styled.div`
    text-align: center;
    line-height: 13px;
    padding: 5px;
    text-overflow: ellipsis;
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
`;
