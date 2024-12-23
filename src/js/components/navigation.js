/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* navigation */
import { DOM, BODY } from '../utils/global';
import { enableScrollLock, disableScrollLock, scrollToTop } from '../utils/utils';

const wrapper = 'nav-wrapper';
const target = DOM.querySelector(`.${wrapper}`);
const overlay = DOM.querySelector('.overlay');
const trigger = DOM.querySelectorAll('.menu__toggle');
const navLinks = DOM.querySelectorAll('.pages li a');
const overlayOpenClass = 'overlay__open';
const scrollLockClass = 'scroll-lock';
let isAjax = false;

const navigation = () => {
    [...trigger].forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            if (item.classList.contains('menu__toggle--close')) {
                isAjax = false;
                closeNavigation();
            } else {
                openNavigation();
            }
        });
    });

    overlay.addEventListener('click', () => {
        isAjax = false;
        if (overlay.classList.contains(overlayOpenClass)) {
            closeNavigation();
        }
    });

    window.addEventListener('keydown', event => {
        isAjax = false;
        if (event.key === 'Escape' && overlay.classList.contains(overlayOpenClass)) {
            closeNavigation();
        }
    });
}

navLinks.forEach(item => {
    item.addEventListener('click', () => {
        isAjax = true;
    });
});


const openNavigation = () => {
    target.scrollTop = 0;
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
    if (isAjax) {
        scrollToTop();
    }
}

export  {
    navigation,
    openNavigation,
    closeNavigation
};
