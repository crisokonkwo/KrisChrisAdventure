// Security Code Validation
function validateCode() {
    const securityCodeInput = document.getElementById('security-code').value.trim();
    const correctCode = 'WEDDING2025';
    const rsvpButton = document.getElementById('rsvp-button');
    const errorMessage = document.getElementById('error-message');

    if (securityCodeInput === correctCode) {
        // Hide security input and show RSVP button
        document.getElementById('security-container').style.display = 'none';
        rsvpButton.style.display = 'inline-block';
    } else {
        // Show error message
        errorMessage.style.display = 'block';
    }
}