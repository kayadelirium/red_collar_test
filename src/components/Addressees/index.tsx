import React, { useState } from "react";
import Button from "../../atoms/Button";
import { AddresseeContainerStyled, AddresseesLabelStyled, AddresseesStyled } from "./index.styled";
import addIcon from "../../assets/images/add.svg";
import AddresseeModal from "../AddresseeModal";
import Addressee from "../Addressee";
import { AddresseeInfo } from "../../types";
import { IProps } from "./types";

const Addressees: React.FC<IProps> = (props) => {
    const { error, addressees, setAddressees } = props;

    const [addModal, setAddModal] = useState(false);
    const [editedAddressee, setEditedAddressee] = useState<AddresseeInfo>();

    return (
        <AddresseesStyled error={error}>
            <AddresseesLabelStyled> Addressees*: </AddresseesLabelStyled>
            <Button onClick={() => setAddModal(true)} icon={addIcon} />
            <AddresseeContainerStyled>
                {addressees.map((addressee, index) => (
                    <Addressee
                        key={index + addressee.name + addressee.email}
                        name={addressee.name}
                        onEdit={() => {
                            setEditedAddressee(addressee);
                            setAddModal(true);
                        }}
                        onDelete={() => setAddressees(addressees.filter((item) => item !== addressee))}
                    />
                ))}
            </AddresseeContainerStyled>
            {addModal && (
                <AddresseeModal
                    addressee={editedAddressee}
                    onClose={() => {
                        setAddModal(false);
                        setEditedAddressee(undefined);
                    }}
                    setAddresses={setAddressees}
                />
            )}
        </AddresseesStyled>
    );
};

export default Addressees;
