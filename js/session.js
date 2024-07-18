import { util } from './util.js';
import { storage } from './storage.js';

export const session = (() => {

    const session = storage('session');

    (new bootstrap.Modal('#loginModal')).show();

    const correctPassword = "chrisandkris25";
    const login = async (button) => {
        const btn = util.disableButton(button, '<div class="spinner-border spinner-border-sm me-1" role="status"></div>Loading..');
        const input = document.getElementById('loginName');
        const password = document.getElementById('loginPassword');
        input.disabled = true;
        password.disabled = true;

        if (input.value.trim() !== '' && password.value.trim() !== '') {
            if (password.value === correctPassword) {
                sessionStorage.setItem('loginName', input.value);
                sessionStorage.setItem('isLoggedIn', 'true'); // Set the login flag
                const encodedName = encodeURIComponent(input.value.trim());
                
                // Make an AJAX request to the server to store the loginName
                // const response = await fetch('https://foreverchrisandkris.com/connection.php', {
                const response = await fetch('https://crisokonkwo.github.io/KrisChrisAdventure/connection.php', {
                    mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `loginName=${encodedName}`
                });

                if (response.ok) {
                    bootstrap.Modal.getOrCreateInstance('#loginModal').hide();
                    window.location.href=`welcome-page.html?to=${encodedName}`;
                } else {
                    alert('Failed to store login name. Please contact me if you get this alert.');
                    btn.restore();
                    input.disabled = false;
                    password.disabled = false;
                }
            } else {
                alert('Incorrect password. Please try again.');
                btn.restore();
                email.disabled = false;
                password.disabled = false;
            }
        } else {
            alert('Please enter your name (first and last) and password.');
            btn.restore();
            email.disabled = false;
            password.disabled = false;
        }

        
    };
    
    const showpass = () => {
        const password = document.getElementById('loginPassword');
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password"
        }
    };

    return {
        login,
        showpass
    };
})();
