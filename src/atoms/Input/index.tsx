import React from "react";
import { InputInputStyled, InputStyled, InputTextareaStyled } from "./index.styled";
import { InputTypes, IProps } from "./types";

const Input: React.FC<IProps> = (props) => {
    const { placeholder, type, register, error } = props;

    return (
        <InputStyled>
            {type === InputTypes.textarea ? (
                <InputTextareaStyled error={error} placeholder={placeholder} {...register} />
            ) : (
                <InputInputStyled error={error} placeholder={placeholder} type={type} {...register} />
            )}
        </InputStyled>
    );
};

export default Input;
