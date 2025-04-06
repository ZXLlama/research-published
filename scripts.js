document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('watchButton');
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });

    const images = document.querySelectorAll('.image-container');
    const header = document.querySelector('header');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? '1' : '0';
            img.style.objectFit = 'contain'; // 確保圖片只靠等比例縮放，不裁切
        });
    }

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > images[currentIndex].offsetTop + images[currentIndex].offsetHeight / 2 && currentIndex < images.length - 1) {
            currentIndex++;
        } else if (scrollTop < images[currentIndex].offsetTop - images[currentIndex].offsetHeight / 2 && currentIndex > 0) {
            currentIndex--;
        }

        showImage(currentIndex);

        if (currentIndex === 0) {
            header.style.opacity = '1';
        } else {
            header.style.opacity = '0';
        }
    }

    window.addEventListener('scroll', handleScroll);

    showImage(currentIndex);
    window.scrollTo(0, 0); // 初始滾動到最上層
});
