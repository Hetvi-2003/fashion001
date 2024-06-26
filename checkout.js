
document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('.payment-method');

    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            const selectedMethod = method.getAttribute('data-method');
            let url = '';
            switch (selectedMethod) {
                case 'credit-card':
                    url = 'credit-card.html';
                    break;
                case 'paypal':
                    url = 'paypal.html';
                    break;
                case 'bank-transfer':
                    url = 'bank-transfer.html';
                    break;
                case 'cash-on-delivery':
                    url = 'confirmation.html';
                    break;
            }
            window.location.href = url;
        });
    });
});
