const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const main = document.querySelector('main');

sign_up_btn.addEventListener('click', () => {
    main.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    main.classList.remove('sign-up-mode');
});

const sign_up_form = document.querySelector('form#sign-up-form');
const sign_in_form = document.querySelector('form#sign-in-form');

sign_up_form.addEventListener('click', e => console.log('sign up'));
sign_in_form.addEventListener('click', e => console.log('sign in'));
