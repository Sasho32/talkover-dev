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

// ---------------------------------------------------------->

// ---------------------------------------------------------->

const carrets = document.querySelectorAll('i.fa-angle-up');
const users = document.querySelectorAll('article.user');

carrets.forEach((carret, index) =>
    carret.closest('article.user').addEventListener('click', () => {
        carrets.forEach((carret, i) => {
            if (i !== index) {
                carret.closest('article.user').classList.remove('opened');
            }
        });
        carret.closest('article.user').classList.toggle('opened');
    })
);
