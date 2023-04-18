import 'bootstrap';
import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const randColor = _ => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


document.querySelectorAll('.--random--color')
    .forEach(div => div.style.backgroundColor = randColor());

if (document.querySelector('.--colors--counter')) {
    const range = document.querySelector('input.--colors--counter');
    const print = document.querySelector('span.--colors--counter');
    range.addEventListener('change', _ => print.innerText = range.value);
}

if (document.querySelector('.--cat--select')) {
    const select = document.querySelector('.--cat--select');
    select.addEventListener('change', _ => {
        axios.get(select.dataset.url + '?cat=' + select.value)
            .then(res => {
                console.log();
            })
    })

}