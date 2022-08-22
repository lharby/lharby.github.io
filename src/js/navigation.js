/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* navigation */
import { DOM, BODY } from './global';
import { enableScrollLock, disableScrollLock } from './utils';

const navigation = () => {
    const wrapper = 'nav-wrapper';
    const target = DOM.querySelector(`.${wrapper}`);
    const overlay = DOM.querySelector('.overlay');
    const trigger = DOM.querySelectorAll('.menu__toggle');
    const overlayOpenClass = 'overlay__open';
    const scrollLockClass = 'scroll-lock';
    [...trigger].forEach(item => {
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
        BODY.classList.add(scrollLockClass);
        overlay.classList.add(overlayOpenClass);
        enableScrollLock();
    }

    const closeNavigation = () => {
        target.classList.remove(`${wrapper}--open`);
        BODY.classList.remove(scrollLockClass);
        overlay.classList.remove(overlayOpenClass);
        disableScrollLock();
    }
}

export default navigation;
