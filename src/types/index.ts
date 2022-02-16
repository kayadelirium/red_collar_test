export type AddresseeInfo = {
    name: string;
    email: string;
};

export type PartyFormDescription = {
    title: string;
    description: string;
    date: string;
    time: string;
};

export type Invitation = {
    people_list: AddresseeInfo[];
    title: string;
    description: string;
    timestamp: number;
};
