/*
Luke Harby
slackwise LTD
https://slackwise.org.uk
2012 - present
*/

/* entry function */
import { DOM, HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS } from "./global";
import { enableScrollLock, disableScrollLock } from './utils';
import { setCookie, getCookie } from "./cookies";

const entry = () => {
    const cookieIsSet = getCookie('entry');
    const wrapper = document.querySelector('.entry');
    if (cookieIsSet) {
        wrapper.classList.add(HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS);
        disableScrollLock();
    } else {
        wrapper.classList.remove(HIDDEN_CLASS, VISIBILITY_HIDDEN_CLASS);
        enableScrollLock();
    }
    wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add(VISIBILITY_HIDDEN_CLASS, HIDDEN_CLASS);
        setCookie('entry', 1, 7);
        disableScrollLock();
    });
}

export default entry;