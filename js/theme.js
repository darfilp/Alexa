const darkMode = ()  => {
    const body = document.body
    const toggle = document.querySelector('.toggle use');
    const headerBg = document.querySelector('.header');
    const heroBg = document.querySelector('.hero');
    const wasDarkMode = localStorage.getItem('darkmode') === 'true'
    const navLinks = document.querySelectorAll('.nav__link');
    const icon = document.querySelector('.icon');
    const lang = document.querySelectorAll('.lang__color');
    const heroBtn = document.querySelector('.hero__button');
    const sectionTitle = document.querySelectorAll('.section__title');
    const sectionSpan = document.querySelectorAll('.section__name-span');
    const portfolioBtn = document.querySelectorAll('.portfolio__btn');
    const price = document.querySelectorAll('.price__count');
    const contacts = document.querySelector('.contacts');
    const contact = document.querySelector('.contacts__title');
    const footerIcon = document.querySelectorAll('.footer__icon'); 
    

    localStorage.setItem('darkmode', !wasDarkMode);
    const changeClick = (indexClick) => {
        portfolioBtn.forEach((btn, index)=> {
            btn.classList.remove('portfolio__btn-active-mode');
            if(indexClick === index) {
                btn.classList.add('portfolio__btn-active-mode');
            }
        })
    }

    if (!wasDarkMode) {
            toggle.href.baseVal = "./assets/svg/moon.svg#moon"
            toggle.classList.add('icon-mode', !wasDarkMode);
    } else {
        toggle.classList.remove('icon-mode', !wasDarkMode);
        toggle.href.baseVal = "./assets/svg/sun.svg#sun"
    }

    

    body.classList.toggle('light-mode', !wasDarkMode);

    headerBg.classList.toggle('header-mode', !wasDarkMode);
    heroBg.classList.toggle('hero-mode', !wasDarkMode);
    navLinks.forEach(link => {
        link.classList.toggle('link-mode', !wasDarkMode);
    });
    icon.classList.toggle('icon-mode', !wasDarkMode);
    heroBtn.classList.toggle('button-mode', !wasDarkMode)
    heroBtn.addEventListener('mouseover', () => {
        heroBtn.classList.add('button-mode__hover')
    })
    heroBtn.addEventListener('mouseout', () => {
        heroBtn.classList.remove('button-mode__hover')
    })
    sectionTitle.forEach(title => {
        title.classList.toggle('section-mode', !wasDarkMode);
    })
    sectionSpan.forEach(span => {
        span.classList.toggle('section-name-mode', !wasDarkMode);
    })
    portfolioBtn.forEach((btn, index) => {
        portfolioBtn[3].classList.add('portfolio__btn-active-mode');
        btn.classList.toggle('portfolio-btn-mode', !wasDarkMode);
        btn.addEventListener('click', () => {
            changeClick(index)
        })
    })

    price.forEach((item, index) => {
        if (index === 0 || index === 1) {
            item.classList.toggle('link-mode', !wasDarkMode);
        }
    })

    contacts.classList.toggle('contacts-mode', !wasDarkMode);
    contact.classList.toggle('link-mode', !wasDarkMode);
    footerIcon.forEach(icon => {
        icon.classList.toggle('icon-mode', !wasDarkMode);
    })
    const btnMode = document.querySelector('.nav__list-active');

}



const toggle = document.querySelector('.toggle');


toggle.addEventListener('click', (e) => {
    e.preventDefault();
    darkMode();
})

