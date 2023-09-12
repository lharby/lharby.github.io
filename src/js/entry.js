/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* entry function */
import { HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS } from "./global";
import { enableScrollLock, disableScrollLock } from './utils';
import { setCookie, getCookie } from "./cookies";

const fadeOutClass = 'fade-out';

const entry = () => {
    const cookieIsSet = getCookie('entry');
    const entryElem = document.querySelector('.entry');
    if (cookieIsSet) {
        entryElem.classList.add(HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS);
        disableScrollLock();
    } else {
        entryElem.classList.remove(HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS);
        enableScrollLock();
    }
    entryElem.addEventListener('click', (e) => {
        e.preventDefault();
        entryElem.classList.add(fadeOutClass);
        setCookie('entry', 1, 7);
        disableScrollLock();
        entryElem.addEventListener("animationend", () => {
            entryElem.classList.add(VISIBILITY_HIDDEN_CLASS, HIDDEN_CLASS);
            entryElem.classList.remove(fadeOutClass)
        });
    });
}

export default entry;