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

const imgs = document.querySelectorAll('img');

imgs.forEach(img =>
    img.addEventListener('click', () => {
        alert('clicked');
    })
);

// DA GO OPRAISH
