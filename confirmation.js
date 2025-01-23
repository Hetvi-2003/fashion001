
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('confirmForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
      
        const formData = new FormData(form);
        const name = formData.get('name');
        const address = formData.get('address');
        const confirmAddress = formData.get('confirm-address');
        const mobileNumber = formData.get('mobile-number');
        const otherMobileNumber = formData.get('other-mobile-number');

       
        window.location.href = 'index.html';

        alert('Thank you for purchasing from Hetvi\'s Fashion.');
    });
});
