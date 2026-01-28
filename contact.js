const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('msg');
const form = document.getElementById('myForm')

const submitBtn = document.getElementById('submitBtn');
const emailErr = document.getElementById('emailErr');
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

    successMsg.textContent = 'Submitting... ';
    submitBtn.disabled = true;
})

function checkInput(){

    const inputs = 
        nameInput.value.trim() !== '' && 
        emailInput.value.trim() !== '' && 
        msgInput.value.trim().length >= 20 

        submitBtn.disabled = !inputs;
}