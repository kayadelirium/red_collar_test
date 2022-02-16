import React from "react";
import PartyForm from "../PartyForm";
import { MainStyled } from "./index.styled";

const Main: React.FC = () => {
    return (
        <MainStyled>
            <PartyForm />
        </MainStyled>
    );
};

export default Main;
