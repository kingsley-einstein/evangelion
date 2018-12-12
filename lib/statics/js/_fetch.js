(
    () => {
        const signUpForm = document.getElementById('signUpForm');
        const signInForm = document.getElementById('signInForm');

        signUpForm.addEventListener('submit', (event) => {
            event.preventDefault();
            fetch('/users/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: document.getElementById('email_signup').value,
                    username: document.getElementById('username_signup').value,
                    password: document.getElementById('password_signup').value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (response.status === 500) {
                    alert(`${response.statusText}. Check for duplicate details: Change either email or username`)
                }
                if (response.status === 200) {
                    alert('Successfully registered user! Proceed to login');
                }

                return response.json();
            })
            .then((value) => console.log(value))
            .catch((rejected) => {
                alert('An error occurred');
                console.log(rejected);
            });

            signUpForm.reset();
        });

        signInForm.addEventListener('submit', (event) => {
            event.preventDefault();
            fetch('/users/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: document.getElementById('email_signin').value,
                    password: document.getElementById('password_signin').value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (response.status === 500) {
                    alert(`${response.statusText}. Incorrect password`);
                }

                if (response.status === 404) {
                    alert(`${response.statusText}. User with specified email not found`)
                }

                if (response.status === 200) {
                    return response.json();
                }
            })
            .then((res) => {
                if (res) {
                    localStorage.setItem('token', res.token);
                }
            })
            .catch((rejected) => console.log(rejected));

            signInForm.reset();
            
        });
    }
)();