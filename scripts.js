document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('watchButton');
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
