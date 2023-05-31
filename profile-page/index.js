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

const editBtn = document.querySelector('i.fa-pen-to-square');
const confirmBtn = document.querySelector('i.fa-circle-check');
const discardBtn = document.querySelector('i.fa-circle-xmark');
const section = document.querySelector('main > section');

editBtn.addEventListener('click', () => {
    section.classList.add('edit-mode');
});
confirmBtn.addEventListener('click', () => {
    section.classList.remove('edit-mode');
});
discardBtn.addEventListener('click', () => {
    section.classList.remove('edit-mode');
});
