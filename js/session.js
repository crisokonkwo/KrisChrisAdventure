import { util } from './util.js';
import { user } from './user.js';
import { theme } from './theme.js';
import { storage } from './storage.js';
import { comment } from './comment.js';
import { request, HTTP_POST } from './request.js';

export const session = (() => {

    const session = storage('session');

    // theme.check();

    new bootstrap.Modal('#loginModal').show();

    

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

    const login = async (button) => {

        const btn = util.disableButton(button, '<div class="spinner-border spinner-border-sm me-1" role="status"></div>Loading..');
        const input = document.getElementById('loginName');
        input.disabled = true;

        if (input.value.trim() !== '') {
            const name = encodeURIComponent(input.value.trim());
            console.log(name)
            bootstrap.Modal.getOrCreateInstance('#loginModal').hide();
            window.location.href=`welcome-page.html?to=${name}`
            //document.getElementById('welcome').style.display = 'block';

            //guest(email.value.trim());
            

        } else {
            alert('Please enter your first and last name.');
            btn.restore();
            email.disabled = false;
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

    // const logout = () => {
    //     if (!confirm('Are you sure?')) {
    //         return;
    //     }

    //     session.unset('token');
    //     (new bootstrap.Modal('#loginModal')).show();
    // };

    return {
        login
        //logout
    };
})();