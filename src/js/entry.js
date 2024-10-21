/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* entry function */
import { WRAPPER, HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS } from "./global";
import { enableScrollLock, disableScrollLock } from './utils';
// import { setCookie, getCookie } from "./cookies";
import { addToSessionStorage, retrieveFromSessionStorage } from './utilsStorage';

const fadeOutClass = 'fade-out';

const entry = () => {
    // const cookieIsSet = getCookie('entry');
    const cookieIsSet = retrieveFromSessionStorage('entry');
    const entryElem = document.querySelector('.entry');
    if (cookieIsSet) {
        entryElem.classList.add(HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS);
        WRAPPER.classList.remove(HIDDEN_CLASS);
        disableScrollLock();
    } else {
        entryElem.classList.remove(HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS);
        enableScrollLock();
    }
    entryElem.addEventListener('click', (e) => {
        e.preventDefault();
        entryElem.classList.add(fadeOutClass);
        WRAPPER.classList.remove(HIDDEN_CLASS);
        addToSessionStorage('entry', 1);
        disableScrollLock();
        entryElem.addEventListener("animationend", () => {
            entryElem.classList.add(VISIBILITY_HIDDEN_CLASS, HIDDEN_CLASS);
            entryElem.classList.remove(fadeOutClass);
        });
    });
}

export default entry;