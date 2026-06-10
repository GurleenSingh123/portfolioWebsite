const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('msg');
const form = document.getElementById('myForm')

const submitBtn = document.getElementById('submitBtn');
const emailErr = document.getElementById('emailErr');
const msgErr = document.getElementById('msgErr');
const successMsg = document.getElementById('successMsg');

submitBtn.disabled = true;

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     emailjs.send("service_lbeonpb", "template_fci0fgg", {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("textarea").value
//     })

//     form.reset();

//     successMsg.innerText = "Message sent successfully!";

//     setTimeout(() => {
//         successMsg.innerText = "";
//     }, 3000);
// })

form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("service_lbeonpb", "template_fci0fgg", {
        name: nameInput.value,
        email: emailInput.value,
        message: msgInput.value
    })
    .then(() => {
        form.reset();

        successMsg.innerText = "Message sent successfully!";

        setTimeout(() => {
            successMsg.innerText = "";
        }, 3000);
    })
    .catch((error) => {
        successMsg.innerText = "Failed to send message!";
        console.log(error);
    });
});

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

function checkInput(){

    const inputs = 
        nameInput.value.trim() !== '' && 
        emailInput.value.trim() !== '' && 
        msgInput.value.trim().length >= 20 

        submitBtn.disabled = !inputs;
}