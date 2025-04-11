document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        header.style.opacity = scrollTop === 0 ? '1' : '0.8';
    }

    window.addEventListener('scroll', handleScroll);
});
