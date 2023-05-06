//sign in page

const form = document.getElementById('form');
const Username = document.getElementById('Username');
const Password = document.getElementById('Password');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const UsernameValue = Username.value;
    const PasswordValue = Password.value;

    localStorage.setItem('name', UsernameValue);
    localStorage.setItem('pass', PasswordValue);
})