// Basic JavaScript for eStore
document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive functionality here

    // Example: Confirm delete actions
    const deleteLinks = document.querySelectorAll('a[href*="delete"], a[href*="remove"]');
    deleteLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to perform this action?')) {
                e.preventDefault();
            }
        });
    });

    // Example: Auto-hide success messages after 5 seconds
    const successMessages = document.querySelectorAll('.success');
    successMessages.forEach(message => {
        setTimeout(() => {
            message.style.display = 'none';
        }, 5000);
    });

    // Example: Auto-hide error messages after 5 seconds
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(message => {
        setTimeout(() => {
            message.style.display = 'none';
        }, 5000);
    });
});
