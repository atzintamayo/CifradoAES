const input = document.querySelector('input');
const counter = document.querySelector('span');
const char = document.querySelector('h3');

counter.style.color = 'red';

input.addEventListener('input', e => {
    if (input.value.length <24) {
        counter.innerText = input.value.length;
    } else {
        counter.innerText = 'Max';
        input.value = input.value.substring(0, 24)
    }
})