import { ChangeEvent } from 'react';

export type PaymentModalProps = {
    id: number;
    onClose: () => void;
}

export type PaymentListProps = {
    selectedPayment: string;
    value: string;
    img: string;
    name: string;
    handlePaymentSelect: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type PaymentKazProps = {
    price?: number;
    id: number;
    onClose: () => void;
}

export type PaymentKazData = {
    titleExpired: string;
    titleNotExpired: string;
    text: string;
}

export type PaymentMethodsData = {
    [key: string]: PaymentKazData;
}
