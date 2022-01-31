const btns = document.querySelector('.portfolio__btns');
const btn = document.querySelectorAll('.portfolio__btn');
const portfolioImage = document.querySelectorAll('.portfolio__photo');


btn.forEach((item, index) => {
    item.addEventListener('click', () => {
        changeBtn(index);
        });
    });

const changeBtn = (indexClick) => {
    btn.forEach((item, index) => {
        item.classList.remove('portfolio__btn-active');
        if(indexClick === index) {
            item.classList.add('portfolio__btn-active');
        }
    }) 
};

const changeImage = (e) => {
    if(e.target.classList.contains('portfolio__btn')) {
        const target = e.target.dataset.season;
        portfolioImage.forEach((item, index) => {item.src = `./assets/img/${target}/${index + 1}.jpg`}
        )};


}


btns.addEventListener('click', changeImage)
