let btn = document.querySelector('.btn');
let input = document.querySelector('.search-input');

btn.addEventListener('click', () => {
    btn.classList.toggle('clicked');
    input.classList.toggle('open');

    if(!btn.classList.contains('clicked')) {
        input.value = '';
    }
})