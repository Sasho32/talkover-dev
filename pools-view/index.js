// document.addEventListener('click', e => {
//     console.log(e.currentTarget);
//     if (e.target.matches('li')) {
//         document
//             .querySelectorAll('li')
//             .forEach(li => li.classList.remove('active'));
//         e.target.classList.add('active');
//     }
// });

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

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', e => {
        categories.forEach(category => category.classList.remove('active'));
        e.currentTarget.classList.add('active');

        // document.querySelector('nav').classList.remove('active');
    });
});

// ---------------------------------------------------------->

const modeOptions = document.querySelectorAll('div.mode');
const addButtonSpan = document.querySelector('button#add span');

modeOptions[0].addEventListener('click', e => {
    e.currentTarget.parentElement.classList.add('posts-mode');
    addButtonSpan.textContent = 'Add a post!';
});
modeOptions[1].addEventListener('click', e => {
    e.currentTarget.parentElement.classList.remove('posts-mode');
    addButtonSpan.textContent = 'Add a poll!';
});
// ---------------------------------------------------------->

const ctxs = document.querySelectorAll('article.poll > canvas');

ctxs.forEach(ctx => {
    console.log(ctx);
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['БСП', 'ПП', 'ГЕРБ', 'ДБ', 'ИТН', 'Възраждане'],
            datasets: [
                {
                    label: 'Number of votes',
                    data: [
                        Math.random() * (20 - 1) + 1,
                        Math.random() * (20 - 1) + 1,
                        Math.random() * (20 - 1) + 1,
                        Math.random() * (20 - 1) + 1,
                        Math.random() * (20 - 1) + 1,
                        Math.random() * (20 - 1) + 1,
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            // scales: {
            //     y: {
            //         beginAtZero: true,
            //     },
            // },
            plugins: {
                title: {
                    display: true,
                    text: 'За кого ще гласувате?',
                },
                legend: {
                    position: 'bottom',
                },
            },
            // responsive: true,
        },
    });
});
