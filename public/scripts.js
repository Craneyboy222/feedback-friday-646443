/* JavaScript */

// Initialize tooltips
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// Function to display notifications
function displayNotifications(notifications) {
    notifications.forEach(notification => {
        alert(notification.message);
    });
}

// Error handling
window.onerror = function(message, source, lineno, colno, error) {
    console.error(`Error: ${message} at ${source}:${lineno}:${colno}`);
};

// Secure AJAX setup
$.ajaxSetup({
    beforeSend: function(xhr) {
        const token = localStorage.getItem('authToken');
        if (token) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        }
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error(`AJAX Error: ${textStatus}`);
    }
});