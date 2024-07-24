export const handleBetaTransferPayment = async (
    currency: string,
    paymentSystem: string,
    amount: number
  ) => {
    try {
      const response = await fetch(
        'https://courseapi.orlandiya22.com/api/v1/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payer: 'without.mail@orlandiya22.com',
          amount,
          currency,
          paymentSystem,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        window.location.href = data.order.url;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  