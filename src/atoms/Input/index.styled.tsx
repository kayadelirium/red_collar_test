import styled from "styled-components";

export const InputStyled = styled.div`
    max-width: 350px;
    width: 90%;
`;

export const InputInputStyled = styled.input`
    border: none;
    width: 100%;
    display: block;
    background-color: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;

    ::placeholder {
        transition: 0.3s;
        color: rgba(255, 255, 255, 0.5);
        font-size: 13px;
        font-family: monospace;
    }

    border-radius: 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-top: 1px solid rgba(255, 255, 255, 0.2);

    outline: none;
    color: white;
    padding: 5px 5px 5px 10px;
    cursor: pointer;

    transition: 0.3s;
    :hover,
    :focus {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    }
    :focus {
        border-color: rgba(255, 255, 255, 0.4);
        box-shadow: none;
        ::placeholder {
            color: rgba(255, 255, 255, 0.2);
        }
    }
`;

export const InputTextareaStyled = styled(InputInputStyled).attrs({ as: "textarea" })`
    height: 70px;
    resize: none;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 4px;
        padding: 2px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;
