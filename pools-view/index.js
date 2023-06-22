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

const data = ctxs.forEach(ctx => {
    console.log(ctx);
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['БСП', 'ПП', 'ГЕРБ', 'ДБ', 'ИТН', 'Възраждане'],
            datasets: [
                {
                    label: 'Number of votes',
                    data: new Array(6).fill(6).map(e => {
                        console.log();
                        return Math.round(Math.random() * (20 - 1) + 1);
                    }),
                    backgroundColor: [
                        '#8332ac',
                        '#08b2e3',
                        '#fcb07e',
                        '#1c7293',
                        '#53C986',
                        '#f45b69',
                    ],

                    // hoverBorderColor: [
                    //     '#8332ac',
                    //     '#08b2e3',
                    //     '#fcb07e',
                    //     '#1c7293',
                    //     '#53C986',
                    //     '#f45b69',
                    // ],
                    // hoverBackgroundColor: [
                    //     '#8332ac',
                    //     '#08b2e3',
                    //     '#fcb07e',
                    //     '#1c7293',
                    //     '#53C986',
                    //     '#f45b69',
                    // ],
                    // hoverBorderWidth: 2,
                    borderWidth: 2,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                    onClick: () => {},
                },
            },
            // responsive: true,
        },
    });
});
