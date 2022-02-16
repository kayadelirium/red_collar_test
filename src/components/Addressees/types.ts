import { AddresseeInfo } from "../../types";

export interface IProps extends IStyledProps {
    addressees: AddresseeInfo[];
    setAddressees: React.Dispatch<React.SetStateAction<AddresseeInfo[]>>;
}

export interface IStyledProps {
    error?: boolean;
}
