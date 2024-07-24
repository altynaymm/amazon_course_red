import { handleBetaTransferPayment } from '@/assets/utils/paymentApiUtils';
import { paymentData } from '../data/paymentData';


export const handleOnClick = async (
    selectedPayment: string,
    id: number,
    isTimerExpired: boolean,
    setStep: (step: number) => void,) => {
    if (!selectedPayment) {
        console.error('Выберите способ оплаты');
        return;
    }

    const paymentDetail = paymentData[id]?.[selectedPayment];

    if (!paymentDetail) {
        console.error('Неверные данные о платеже или не поддерживаемый тип платежа');
        return;
    }

    const amount = isTimerExpired
        ? paymentDetail.price
        : paymentDetail.discountPrice;

    const paymentUrl = isTimerExpired
        ? paymentDetail.url
        : paymentDetail.discountUrl;

    switch (selectedPayment) {
        case 'Kaz':
            setStep(2);
            break;
        case 'Kyrgyz':
        case 'Ukr':
            if (paymentDetail.currency && paymentDetail.paymentSystem && amount) {
                await handleBetaTransferPayment(
                    paymentDetail.currency,
                    paymentDetail.paymentSystem,
                    amount
                );
            }
            break;
        default:

            if (paymentUrl) {
                window.location.href = paymentUrl;
            } else {
                console.error('URL для оплаты не определен');
            }
            break;
    }
};
