const _signUpButton = document.getElementById('sign-up');
const _signUpModal = document.getElementById('sign-up-modal');
const _container = document.getElementById('container');
const _closeModal = document.getElementById('close-modal');

_signUpButton.addEventListener('click', (event) => {
    _container.classList.add('blurred');
    _signUpModal.classList.add('active');
});

_closeModal.addEventListener('click', (event) => {
    _container.classList.remove('blurred');
    _signUpModal.classList.remove('active');
});
