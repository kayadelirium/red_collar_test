import React from "react";
import Button from "../../atoms/Button";
import { AddresseeNameStyled, AddresseeStyled } from "./index.styled";
import { IProps } from "./types";
import deleteIcon from "../../assets/images/delete.svg";

const Addressee: React.FC<IProps> = (props) => {
    const { name, onDelete, onEdit } = props;
    return (
        <AddresseeStyled>
            <AddresseeNameStyled onClick={onEdit}>{name}</AddresseeNameStyled>
            <Button onClick={onDelete} icon={deleteIcon} />
        </AddresseeStyled>
    );
};

export default Addressee;
