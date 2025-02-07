const de = document.querySelector('.de');
const h2 = document.querySelector('.h2');

window.addEventListener('scroll', () =>
{
    const scrollPasition = window.scrollY;
    const deTop = de.offsetTop;
    const deHeight = de.offsetHeight;

    if (scrollPasition > deTop + deHeight / 2){
        h2.classList.add('scroll-in');
    } else {
        h2.classList.remove('scroll-in');
    }
    
    if (scrollPasition > deTop + deHeight) {
        h2.classList.remove('scroll-out');
    }
})