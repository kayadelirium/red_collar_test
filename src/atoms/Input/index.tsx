import React from "react";
import { InputInputStyled, InputStyled, InputTextareaStyled } from "./index.styled";
import { InputTypes, IProps } from "./types";

const Input: React.FC<IProps> = (props) => {
    const { placeholder, type } = props;

    return (
        <InputStyled>
            {type === InputTypes.textarea ? (
                <InputTextareaStyled placeholder={placeholder} />
            ) : (
                <InputInputStyled placeholder={placeholder} type={type} />
            )}
        </InputStyled>
    );
};

export default Input;
