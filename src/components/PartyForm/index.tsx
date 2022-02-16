import React from "react";
import Input from "../../atoms/Input";
import { InputTypes } from "../../atoms/Input/types";
import Addressees from "../Addressees";
import { AddresseesStyled } from "../Addressees/index.styled";
import { PartyFormFormHeaderStyled, PartyFormFormStyled, PartyFormFormTimeStyled, PartyFormStyled } from "./index.styled";

const PartyForm: React.FC = () => {
    return (
        <PartyFormStyled>
            <PartyFormFormStyled>
                <PartyFormFormHeaderStyled>Party</PartyFormFormHeaderStyled>
                <Addressees />
                <Input placeholder='Event name*' />
                <Input placeholder='Description*' type={InputTypes.textarea} />
                <PartyFormFormTimeStyled>
                    <Input placeholder='Date*' type={InputTypes.date} />
                    <Input placeholder='Date*' type={InputTypes.time} />
                </PartyFormFormTimeStyled>
            </PartyFormFormStyled>
        </PartyFormStyled>
    );
};

export default PartyForm;
