fetch('/navBar.html')
  .then(response => response.text())
  
  .then(data => {
    const nav = document.getElementById('navBar');
    if(nav) nav.innerHTML = data;
    
    const menuBtn = document.querySelector('.menuBtn');
    const navList = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navList a');
    
    menuBtn.addEventListener('click', function () {
      navList.classList.toggle('active')
    })

    navLinks.forEach(list => {
      list.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.href;
        
        document.body.classList.add('fade-out');
        
        setTimeout(() => {
          window.location.href = href;
        }, 400);
      })
    });
  })

  .catch(error => console.error('Navbar load error:', error));
