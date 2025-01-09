// Security Code Validation
function validateCode() {
    const securityCodeInput = document.getElementById('security-code').value.trim();
    // const correctCode = 'WEDDING2025' "chrisandkris25";
    const encryptedCorrectCode = '5b737210ccf1653e001cb82ef8cb264c';
    const encryptedInputCode = CryptoJS.MD5(securityCodeInput).toString();
    // console.log(encryptedInputCode);

    const rsvpButton = document.getElementById('rsvp-button');
    const errorMessage = document.getElementById('error-message');

    if (encryptedInputCode === encryptedCorrectCode) {
        // Hide security input and show RSVP button
        document.getElementById('security-container').style.display = 'none';
        rsvpButton.style.display = 'inline-block';
    } else {
        // Show error message
        errorMessage.style.display = 'block';
    }
}