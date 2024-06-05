import { util } from './util.js';
import { user } from './user.js';
import { theme } from './theme.js';
import { storage } from './storage.js';
import { comment } from './comment.js';
import { request, HTTP_POST } from './request.js';

export const session = (() => {

    const session = storage('session');

    // theme.check();

    (new bootstrap.Modal('#loginModal')).show();



    // if (session.get('token')?.split('.').length !== 3 || JSON.parse(atob(session.get('token').split('.')[1])).exp < (new Date()).getTime() / 1000) {
    //     // document.getElementById('welcome').innerHTML = `
    //     // <div class="card-body bg-theme-${theme.isDarkMode('dark', 'light')} shadow p-3 mx-0 mt-0 mb-3 rounded-4">
    //     //     <div class="d-flex flex-wrap justify-content-between align-items-center placeholder-wave">
    //     //         <span class="placeholder bg-secondary col-4 rounded-3"></span>
    //     //         <span class="placeholder bg-secondary col-2 rounded-3"></span>
    //     //     </div>
    //     //     <hr class="text-${theme.isDarkMode('light', 'dark')} my-1">
    //     //     <p class="card-text placeholder-wave">
    //     //         <span class="placeholder bg-secondary col-6 rounded-3"></span>
    //     //         <span class="placeholder bg-secondary col-5 rounded-3"></span>
    //     //         <span class="placeholder bg-secondary col-12 rounded-3"></span>
    //     //     </p>
    //     // </div>`;
    //     (new bootstrap.Modal('#loginModal')).show();
    // } 
    // else {
    //     user.getUserDetail();
    //     user.getStatUser();
    //     comment.comment();
    // }
    // action="login.php" method="POST"
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
                // console.log(encodedName)

                // Make an AJAX request to the server to store the loginName
                const response = await fetch('http://127.0.0.1:4000/connection.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `loginName=${encodedName}`
                });

                if (response.ok) {
                    bootstrap.Modal.getOrCreateInstance('#loginModal').hide();
                    window.location.href = `welcome-page.html?to=${encodedName}`;
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
        // password: document.getElementById('loginPassword').value
        // bootstrap.Modal.getOrCreateInstance('#loginModal').hide();

        // const res = await request(HTTP_POST, '/api/session')
        //     .body({
        //         email: document.getElementById('loginEmail').value,
        //         // password: document.getElementById('loginPassword').value
        //     })
        //     .then((res) => {
        //         if (res.code === 200) {
        //             session.set('token', res.data.token);
        //         }

        //         return res.code === 200;
        //     });

        // if (res) {
        //     bootstrap.Modal.getOrCreateInstance('#loginModal').hide();
        //     user.getUserDetail();
        //     user.getStatUser();
        //     comment.comment();
        // }


    };

    const showpass = () => {
        const password = document.getElementById('loginPassword');
        if (password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password"
        }
    };

    // const logout = () => {
    //     if (!confirm('Are you sure?')) {
    //         return;
    //     }

    //     session.unset('token');
    //     (new bootstrap.Modal('#loginModal')).show();
    // };

    return {
        login,
        showpass
        //logout
    };
})();