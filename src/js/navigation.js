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
        item.addEventListener('click', event => {
            event.preventDefault();
            if (item.classList.contains('menu__toggle--close')) {
                closeNavigation();
            } else {
                openNavigation();
            }
        });
    });

    overlay.addEventListener('click', () => {
        if (overlay.classList.contains(overlayOpenClass)) {
            closeNavigation();
        }
    });

    window.addEventListener("keydown", event => {
        if (event.key === "Escape" && overlay.classList.contains(overlayOpenClass)) {
            closeNavigation();
        }
    });

    const openNavigation = () => {
        target.classList.add(`${wrapper}--open`);
        document.body.classList.add(scrollLockClass);
        overlay.classList.add(overlayOpenClass);
    }

    const closeNavigation = () => {
        target.classList.remove(`${wrapper}--open`);
        document.body.classList.remove(scrollLockClass);
        overlay.classList.remove(overlayOpenClass);
    }
}

export default navigation;