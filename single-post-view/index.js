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

const as = document.querySelectorAll('a');

as.forEach(a => a.addEventListener('click', e => e.preventDefault()));
// ---------------------------------------------------------->
const eyeBtn = document.querySelector('div.interaction:nth-child(1)');
const commentBtn = document.querySelector('div.interaction:nth-child(4)');

const article = document.querySelector('article#post');

eyeBtn.addEventListener('click', () =>
    article.classList.remove('comments-mode')
);
commentBtn.addEventListener('click', () =>
    article.classList.add('comments-mode')
);
