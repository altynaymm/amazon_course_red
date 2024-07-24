import KzFlag from '@img/flag-of-kz.svg';
import UkrFlag from '@img/flag-of-ukr.svg';
import KyrgyzFlag from '@img/flag-of-kyrgyz.svg';
import EuFlag from '@img/Flag_of_Europe 1.svg';
import UAEFlag from '@img/flagofUAE.svg';
import USAFlag from '@img/flagofUSA.svg';


interface PaymentMethod {
    url?: string;
    discountUrl?: string;
    currency?: string;
    paymentSystem?: string;
    price?: number;
    discountPrice?: number;
}


interface PaymentData {
    [key: string]: {
        [key: string]: PaymentMethod;
    };
}


interface PaymentDataArrayItem {
    value: string;
    name: string;
    img: string;
}


const paymentData: PaymentData = {
    '0': {
        Kaz: {
            price: 154000,
            discountPrice: 126000,
        },
        Ukr: {
            currency: 'UAH',
            paymentSystem: 'Card2',
            price: 13500,
            discountPrice: 12000,
        },
        Kyrgyz: {
            currency: 'KGS',
            paymentSystem: 'P2R',
            price: 28575,
            discountPrice: 25000,
        },
        Eu: {
            url: 'https://www.paypal.com/ncp/payment/X7XMFRWBDQL6W',
            discountUrl: 'https://www.paypal.com/ncp/payment/X7XMFRWBDQL6W',
        },
        UAE: {
            url: 'https://www.paypal.com/ncp/payment/X7XMFRWBDQL6W',
            discountUrl: 'https://www.paypal.com/ncp/payment/X7XMFRWBDQL6W',
        },
        USA: {
            url: 'https://www.paypal.com/ncp/payment/X7XMFRWBDQL6W',
            discountUrl: 'https://www.paypal.com/ncp/payment/X7XMFRWBDQL6W',
        },
    },
    '1': {
        Kaz: {
            price: 219000,
            discountPrice: 242000,
        },
        Ukr: {
            currency: 'UAH',
            paymentSystem: 'Card2',
            price: 22000,
            discountPrice: 20000,
        },
        Kyrgyz: {
            currency: 'KGS',
            paymentSystem: 'P2R',
            price: 45000,
            discountPrice: 40700,
        },
        Eu: {
            url: 'https://www.paypal.com/ncp/payment/BBG5JJYP276KJ',
            discountUrl: 'https://www.paypal.com/ncp/payment/BBG5JJYP276KJ',
        },
        UAE: {
            url: 'https://www.paypal.com/ncp/payment/BBG5JJYP276KJ',
            discountUrl: 'https://www.paypal.com/ncp/payment/BBG5JJYP276KJ',
        },
        USA: {
            url: 'https://www.paypal.com/ncp/payment/BBG5JJYP276KJ',
            discountUrl: 'https://www.paypal.com/ncp/payment/BBG5JJYP276KJ',
        },
    },
};


const paymentDataArray: PaymentDataArrayItem[] = [
    {
        value: 'Kaz',
        name: 'Казахстанками картами',
        img: KzFlag,
    },
    {
        value: 'Ukr',
        name: 'Українськими картами',
        img: UkrFlag,
    },
    {
        value: 'Kyrgyz',
        name: 'Кыргызскими картами',
        img: KyrgyzFlag,
    },
    {
        value: 'Eu',
        name: 'Европейскими картами',
        img: EuFlag,
    },
    {
        value: 'UAE',
        name: 'Картой ОАЭ',
        img: UAEFlag,
    },
    {
        value: 'USA',
        name: 'Картой США',
        img: USAFlag,
    }
];

export { paymentData, paymentDataArray };