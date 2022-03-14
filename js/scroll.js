window.addEventListener('scroll', () =>{
    const header = document.querySelector('.header-top');
    header.classList.toggle('scroll-active', window.scrollY > 80);

})