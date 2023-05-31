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
// ---------------------------------------------------------->

const warningMessage = document.querySelector('div.alert');
const closeBtn = warningMessage.querySelector('i');

closeBtn.addEventListener('click', () => {
    warningMessage.style.opacity = 0;
    setTimeout(() => {
        warningMessage.style.display = 'none';
    }, 700);
});
// ---------------------------------------------------------->

const likeBtn = document.querySelector('i.fa-thumbs-up');
const dislikeBtn = document.querySelector('i.fa-thumbs-down');

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('clicked');
    if (likeBtn.classList.contains('clicked')) {
        dislikeBtn.classList.remove('clicked');
    }
});
dislikeBtn.addEventListener('click', () => {
    dislikeBtn.classList.toggle('clicked');
    if (dislikeBtn.classList.contains('clicked')) {
        likeBtn.classList.remove('clicked');
    }
});
