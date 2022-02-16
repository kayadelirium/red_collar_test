import React from "react";
import Button from "../../atoms/Button";
import { AddresseesLabelStyled, AddresseesStyled } from "./index.styled";

const Addressees: React.FC = () => {
    return (
        <AddresseesStyled>
            <AddresseesLabelStyled> Addressees*: </AddresseesLabelStyled>
            <Button onClick={() => {}} />
        </AddresseesStyled>
    );
};

export default Addressees;
