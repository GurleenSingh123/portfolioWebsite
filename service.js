const learnBtn = document.querySelectorAll('.learnBtn');
const allDetail = document.querySelectorAll('.serviceDetail');

learnBtn.forEach(button => {
    button.addEventListener('click', function () {

        if (window.innerWidth <= 830) {
            this.classList.add('clicked');

            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        }

        const serviceData = button.previousElementSibling;
        const isOpen = serviceData.classList.contains('show');

        allDetail.forEach(detail => {
            if (detail !== serviceData) {
                detail.classList.remove('show');
                detail.nextElementSibling.textContent = 'Learn More';
            }
        });

        if(isOpen){
            serviceData.classList.remove('show')
            button.textContent = 'Learn More';
        }

        else{
            serviceData.classList.add('show');
            button.textContent = 'Show Less';
        }
    })
})