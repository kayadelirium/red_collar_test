import React from "react";
import { TextButtonStyled, ButtonStyled, ImageButtonStyled } from "./index.styled";
import { IProps } from "./types";

const Button: React.FC<IProps> = (props) => {
    const { icon, text, onClick } = props;

    return (
        <ButtonStyled onClick={onClick}>
            {icon ? <ImageButtonStyled src={icon} /> : <TextButtonStyled>{text}</TextButtonStyled>}
        </ButtonStyled>
    );
};

export default Button;
