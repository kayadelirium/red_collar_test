import { UseFormRegisterReturn } from "react-hook-form";

export interface IStyledProps {
    error?: boolean;
}

export interface IProps extends IStyledProps {
    placeholder?: string;
    type?: InputTypes;
    register: UseFormRegisterReturn;
}

export enum InputTypes {
    text = "text",
    textarea = "textarea",
    date = "date",
    time = "time",
}
