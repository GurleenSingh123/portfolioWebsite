fetch('/navBar.html')
  .then(response => response.text())
  
  .then(data => {
    const nav = document.getElementById('navBar');
    if(nav) nav.innerHTML = data;
    
    const menuBtn = document.querySelector('.menuBtn');
    const navList = document.querySelector('.navList');
    const navLinks = document.querySelectorAll('.navList a');
    
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      navList.classList.toggle('active');
    })

      document.addEventListener('click', function (e) {
    if (
      navList.classList.contains('active') &&
      !navList.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      navList.classList.remove('active');
    }

  });

    navLinks.forEach(list => {
      list.addEventListener('click', function (e) {
        e.preventDefault();

        const href = this.href;
        
        document.body.classList.add('fade-out');
        
        setTimeout(() => {
          window.location.href = href;
        }, 600);
      })
    });
  })

  .catch(error => console.error('Navbar load error:', error))