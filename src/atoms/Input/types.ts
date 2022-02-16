export interface IProps {
    placeholder?: string;
    type?: InputTypes;
}

export enum InputTypes {
    text = "text",
    textarea = "textarea",
    date = "date",
    time = "time",
}
