const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('num');
const interestInput = document.getElementById('interest');
const budgetInput = document.getElementById('budget');
const countryInput = document.getElementById('country');
const msgInput = document.getElementById('msg');
const form = document.getElementById('myForm')

const submitBtn = document.getElementById('submitBtn');
const emailErr = document.getElementById('emailErr');
const phoneErr = document.getElementById('phoneErr');
const msgErr = document.getElementById('msgErr');
const successMsg = document.getElementById('successMsg');

submitBtn.disabled = true;

msgInput.addEventListener('input', function() {
    if(msgInput.value.length > 0 && msgInput.value.length < 20){
        msgErr.textContent = 'Minimum Character 20';
    }

    else{
        msgErr.textContent = '';
    }

    checkInput();

})

phoneInput.addEventListener('input', function () {

    if(phoneInput.value === ''){
        phoneErr.textContent = '';
    }
        
    else if (phoneInput.value.length === 10) {
        phoneErr.textContent = '';
    }

    else {
        phoneErr.textContent = 'Invalid Number';
    }

    checkInput();

});

emailInput.addEventListener('input', function () {
    const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailInput.value === ''){
        emailErr.textContent = '';
    }

    else if(!emailExpression.test(emailInput.value)){
        emailErr.textContent = 'Invalid Email';
    }


    else{
        emailErr.textContent = '';
    }

    checkInput();
    
})

form.addEventListener('submit', function () {
    
    if (submitBtn.disabled) return;

    successMsg.textContent = 'Sending Message...';
    submitBtn.disabled = true;
})

function checkInput(){

    const inputs = 
        nameInput.value.trim() !== '' && 
        emailInput.value.trim() !== '' && 
        phoneInput.value.trim().length == 10 &&
        msgInput.value.trim().length >= 20 &&
        budgetInput.value.trim() !== '' &&
        countryInput.value.trim() !== '' &&
        interestInput.value.trim() !== ''

        submitBtn.disabled = !inputs;
}