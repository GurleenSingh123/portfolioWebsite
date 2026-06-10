const form = document.getElementById('myForm');
const msg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    emailjs.send("service_lbeonpb", "template_fci0fgg", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("textarea").value
    })

    form.reset();

    msg.innerText = "Message sent successfully!";

    setTimeout(() => {
        msg.innerText = "";
    }, 3000);
})