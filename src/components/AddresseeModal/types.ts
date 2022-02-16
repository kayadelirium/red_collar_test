import { AddresseeInfo } from "../../types";

export interface IProps {
    onClose: () => void;
    addressee?: AddresseeInfo;
    setAddresses: React.Dispatch<React.SetStateAction<AddresseeInfo[]>>;
}
