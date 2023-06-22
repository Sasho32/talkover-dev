const items = document.querySelectorAll('li');

items.forEach(li => {
    li.addEventListener('click', e => {
        items.forEach(item => item.classList.remove('active'));
        e.currentTarget.classList.add('active');

        document.querySelector('nav').classList.remove('active');
    });
});

const menuBar = document.querySelector('main header i');

menuBar.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// ---------------------------------------------------------->

const links = document.querySelectorAll('a');
links.forEach(link => link.addEventListener('click', e => e.preventDefault()));
// ---------------------------------------------------------->

// ---------------------------------------------------------->

// ---------------------------------------------------------->

let OPTIONS_NUM = 6;

const section = document.querySelector('section');
const options = document.querySelector('section > div.options');
const addBtn = document.querySelector('button.add');

addBtn.addEventListener('click', () => {
    if (!OPTIONS_NUM) {
        const span = document.createElement('span');
        span.textContent = "You've reached the maximal number of options.";
        section.replaceChild(span, addBtn);
    }

    const option = document.createElement('div');
    option.classList.add('option');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Name');
    const inputColor = document.createElement('input');
    inputColor.setAttribute('type', 'color');
    inputColor.setAttribute('value', '#3333ff');

    option.append(input, inputColor);
    options.appendChild(option);

    OPTIONS_NUM--;
});
