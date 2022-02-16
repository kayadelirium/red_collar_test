import React from "react";
import Button from "../../atoms/Button";
import {
    AddresseeModalFormFormHeaderStyled,
    AddresseeModalFormFormStyled,
    AddresseeModalFormHeaderStyled,
    AddresseeModalFormStyled,
    AddresseeModalStyled,
} from "./index.styled";
import { IProps } from "./types";
import deleteIcon from "../../assets/images/delete.svg";
import Input from "../../atoms/Input";
import { FormControlStyled } from "../../atoms/Button/index.styled";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddresseeInfo } from "../../types";

const AddresseeModal: React.FC<IProps> = (props) => {
    const { addressee, onClose, setAddresses } = props;
    const buttonType = addressee ? "Save" : "Add";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddresseeInfo>({
        defaultValues: {
            name: addressee ? addressee.name : "",
            email: addressee ? addressee.email : "",
        },
    });

    const onSubmit: SubmitHandler<AddresseeInfo> = (data) => {
        if (!addressee) setAddresses((prev) => [...prev, data]);
        else
            setAddresses((prev) => {
                const item = prev.find((elem) => elem === addressee);
                item!.email = data.email;
                item!.name = data.name;
                return [...prev];
            });
        onClose();
    };

    return (
        <AddresseeModalStyled>
            <AddresseeModalFormStyled>
                <AddresseeModalFormHeaderStyled>
                    <Button onClick={onClose} icon={deleteIcon} />
                </AddresseeModalFormHeaderStyled>
                <AddresseeModalFormFormStyled>
                    <AddresseeModalFormFormHeaderStyled>Addressee</AddresseeModalFormFormHeaderStyled>
                    <Input error={!!errors.name} placeholder="Name*" register={register("name", { required: true })} />
                    <Input error={!!errors.email} placeholder="E-mail*" register={register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} />
                </AddresseeModalFormFormStyled>
                <FormControlStyled>
                    <Button text={buttonType} onClick={handleSubmit(onSubmit)} />
                </FormControlStyled>
            </AddresseeModalFormStyled>
        </AddresseeModalStyled>
    );
};

export default AddresseeModal;
