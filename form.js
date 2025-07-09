var form = document.getElementById('form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var passwordConfirmInput = document.getElementById('passwordConfirm');
var dobInput = document.getElementById('dob');
var countryInput = document.getElementById('country');
function formSubmission(e) {
    console.log('A?A');
    e.preventDefault();
    var data = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value,
        passwordConfirm: passwordConfirmInput.value,
        dob: dobInput.value,
        country: countryInput.value,
    };
    if (data.password !== data.passwordConfirm) {
        alert('Password must be the same as password confirmation');
        return;
    }
    alert("Data Submitted successfully ".concat(JSON.stringify(data)));
}
form.addEventListener('submit', formSubmission);
