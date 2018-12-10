const _signUpButton = document.getElementById('sign-up');
const _signInLink = document.getElementById('sign-in');
const _signUpModal = document.getElementById('sign-up-modal');
const _signInModal = document.getElementById('sign-in-modal');
const _container = document.getElementById('container');
const _closeSignUpModal = document.getElementById('close-sign-up-modal');
const _closeSignInModal = document.getElementById('close-sign-in-modal');
const _navbar = document.getElementById('navbar');

_signUpButton.addEventListener('click', (event) => {
    _container.classList.add('blurred');
    _signUpModal.classList.add('active');
    _navbar.classList.add('disable');
});

_closeSignUpModal.addEventListener('click', (event) => {
    _container.classList.remove('blurred');
    _signUpModal.classList.remove('active');
    _navbar.classList.remove('disable');
});

_signInLink.addEventListener('click', (event) => {
    _container.classList.add('blurred');
    _signInModal.classList.add('active');
    _navbar.classList.add('disable');
});

_closeSignInModal.addEventListener('click', (event) => {
    _container.classList.remove('blurred');
    _signInModal.classList.remove('active');
    _navbar.classList.remove('disable');
});

