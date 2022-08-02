/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* navigation */ 

const navigation = () => {
    const wrapper = 'nav-wrapper';
    const target = document.querySelector(`.${wrapper}`);
    const overlay = document.querySelector('.overlay');
    const trigger = document.querySelectorAll('.menu__toggle');
    const overlayOpenClass = 'overlay__open';
    const scrollLockClass = 'scroll-lock';
    [...trigger].forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            if (item.classList.contains('menu__toggle--close')) {
                closeNavigation();
            } else {
                openNavigation();
            }
            // target.classList.toggle(`${wrapper}--open`);
            // document.body.classList.toggle('scroll-lock');
            // overlay.classList.toggle('overlay__open');
        });
    });

    openNavigation = () => {
        target.classList.add(`${wrapper}--open`);
        document.body.classList.add(scrollLockClass);
        overlay.classList.add(overlayOpenClass);
    }

    closeNavigation = () => {
        target.classList.remove(`${wrapper}--open`);
        document.body.classList.remove(scrollLockClass);
        overlay.classList.remove(overlayOpenClass);
    }
}

export default navigation;