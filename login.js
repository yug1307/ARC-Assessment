let email = document.getElementById('email');
let password = document.getElementById('password');

if(email.value === '@' || password.value === '1234') {
    alert('You have successfully logged in');
}
else{
    console.log('Please fill all the values');
}

const login = [
    { email: '', password: ''},
    { email: '', password: ''},
    { email: '', password: ''},
];
