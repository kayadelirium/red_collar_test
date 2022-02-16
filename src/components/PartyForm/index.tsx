import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../atoms/Button";
import { FormControlStyled } from "../../atoms/Button/index.styled";
import Input from "../../atoms/Input";
import { InputTypes } from "../../atoms/Input/types";
import { AddresseeInfo, Invitation, PartyFormDescription } from "../../types";
import Addressees from "../Addressees";
import { PartyFormFormHeaderStyled, PartyFormFormStyled, PartyFormFormTimeStyled, PartyFormStyled } from "./index.styled";
import moment from "moment";

const PartyForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PartyFormDescription>({
        defaultValues: {
            date: moment().format("YYYY-MM-DD"),
            time: moment().format("HH:mm"),
        },
    });

    const onSubmit: SubmitHandler<PartyFormDescription> = (data) => {
        const { title, description, time, date } = data;
        const dateString = `${date} ${time}`;
        const result: Invitation = { title, description, people_list: addressees, timestamp: moment(dateString).unix() };
        console.log(result);
    };

    const handleSubmitClick = (): void => {
        setSubmitted(true);
        if (addressees.length) {
            const submitFunction = handleSubmit(onSubmit);
            submitFunction();
        }
    };

    const [addressees, setAddressees] = useState<AddresseeInfo[]>([]);
    const [isSubmitted, setSubmitted] = useState<boolean>(false);

    return (
        <PartyFormStyled>
            <PartyFormFormStyled>
                <PartyFormFormHeaderStyled>Party Invitation</PartyFormFormHeaderStyled>
                <Addressees addressees={addressees} setAddressees={setAddressees} error={isSubmitted && !addressees.length} />
                <Input error={!!errors.title} placeholder="Event name*" register={register("title", { required: true })} />
                <Input
                    error={!!errors.description}
                    placeholder="Description*"
                    type={InputTypes.textarea}
                    register={register("description", { required: true })}
                />
                <PartyFormFormTimeStyled>
                    <Input
                        error={!!errors.date}
                        placeholder="Date*"
                        type={InputTypes.date}
                        register={register("date", { required: true })}
                    />
                    <Input
                        error={!!errors.time}
                        placeholder="Time*"
                        type={InputTypes.time}
                        register={register("time", { required: true })}
                    />
                </PartyFormFormTimeStyled>
                <FormControlStyled>
                    <Button onClick={handleSubmitClick} text="Submit" />
                </FormControlStyled>
            </PartyFormFormStyled>
        </PartyFormStyled>
    );
};

export default PartyForm;
