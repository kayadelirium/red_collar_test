import styled from "styled-components";

export const PartyFormStyled = styled.div`
    max-width: 400px;
    width: 98%;
    margin: auto;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    font-family: monospace;
    color: white;

    z-index: 1;

    :before {
        z-index: -1;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 5px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(200px);

        transition: 0.2s linear;
        border-left: 1px solid rgba(255, 255, 255, 0.2);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    :hover {
        :before {
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        }
    }
`;

export const PartyFormFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const PartyFormFormTimeStyled = styled.div`
    display: flex;
    max-width: 350px;
    width: 90%;
    flex-flow: row wrap;
    gap: 10px;

    div {
        flex: 1;
    }
`;

export const PartyFormFormHeaderStyled = styled.div`
    text-align: center;
    font-size: 26px;
`;
