// Common JavaScript functions

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Validate form input
function validateForm(formData) {
    const errors = {};

    // Validate required fields
    for (const [key, value] of formData.entries()) {
        if (!value && value !== 0) {
            errors[key] = 'Field ini harus diisi';
        }
    }

    // Validate email format
    const email = formData.get('email');
    if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.email = 'Format email tidak valid';
    }

    // Validate amount format
    const amount = formData.get('amount');
    if (amount && isNaN(amount.replace(/[,.]/g, ''))) {
        errors.amount = 'Format jumlah tidak valid';
    }

    return errors;
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Handle form submission
function handleFormSubmit(event, formId, successCallback) {
    event.preventDefault();
    
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    
    // Validate form
    const errors = validateForm(formData);
    
    // Clear previous error messages
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    
    // If there are errors, display them
    if (Object.keys(errors).length > 0) {
        for (const [field, message] of Object.entries(errors)) {
            const input = form.querySelector(`[name="${field}"]`);
            if (input) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error-message text-red-500 text-sm mt-1';
                errorDiv.textContent = message;
                input.parentNode.appendChild(errorDiv);
            }
        }
        return;
    }
    
    // If validation passes, call success callback
    if (typeof successCallback === 'function') {
        successCallback(formData);
    }
}

// Initialize date inputs with current date
function initializeDateInputs() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    
    dateInputs.forEach(input => {
        if (!input.value) {
            input.value = today;
        }
    });
}

// Initialize all interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu toggle
    const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMobileMenu);
    }

    // Initialize date inputs
    initializeDateInputs();

    // Initialize amount inputs with currency formatting
    const amountInputs = document.querySelectorAll('input[data-type="currency"]');
    amountInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value) {
                value = parseInt(value).toLocaleString('id-ID');
                e.target.value = value;
            }
        });
    });
});