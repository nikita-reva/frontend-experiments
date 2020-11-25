const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
    'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)',
    'linear-gradient(to top, #fddb92 0%, #d1fdff 100%)'
]

const options = {
    threshold: 0.7,
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        }
        if(entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('background-image', gradients[gradientIndex]);
        }
    })
}

sections.forEach(section => {
    observer.observe(section);
})